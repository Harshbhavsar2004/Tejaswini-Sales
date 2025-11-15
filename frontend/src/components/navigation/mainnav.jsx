import * as React from "react"
import { Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const products = {
    title: "Products",
    items: [
        {
            category: "Vikram Solar Module",
            products: [
                { name: "SURYAVA Module", spec: "700 to 725W" },
                { name: "HYPERSOL Module", spec: "415 to 715W" },
                { name: "PARADEA Module", spec: "395 to 680W" },
                { name: "PREXOS Module", spec: "395 to 680W" },
                { name: "SOMERA Module", spec: "395 to 680W" }
            ]
        },
        {
            category: "Fronius Solar Inverter",
            products: [
                { name: "Hybrid Inverter", spec: "6 to 10kW" },
                { name: "Tauro Inverter", spec: "50 to 100KW" },
                { name: "Eco Inverter", spec: "25 & 27kW" },
                { name: "Symo Inverter", spec: "3 to 20kW" },
                { name: "Primo Inverter", spec: "3 to 8.2kW" }
            ]
        }
    ]
}

export function MainNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[500px] grid-cols-2 gap-6 p-4">
                            {products.items.map((category) => (
                                <div key={category.category} className="p-3  last:border-b-0">
                                    <h3 className="mb-2 text-sm font-medium leading-none text-red-600">
                                        {category.category}
                                    </h3>
                                    <ul className="space-y-2">
                                        {category.products.map((product) => {
                                            // Define redirection logic for specific categories
                                            const categoryPage =
                                                category.category === "Vikram Solar Module"
                                                    ? "/products/vikram-solar"
                                                    : category.category === "Fronius Solar Inverter"
                                                        ? "/products/fronius-solar"
                                                        : null;

                                            return (
                                                <ListItem
                                                    key={product.name}
                                                    title={product.name}
                                                    href={categoryPage}
                                                >
                                                    {product.spec}
                                                </ListItem>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef((props, ref) => {
    const { className, title, children, ...otherProps } = props;

    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...otherProps}
                >
                    <div className="font-medium leading-none">{title}</div>
                    {children && (
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                            {children}
                        </p>
                    )}
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default MainNav;