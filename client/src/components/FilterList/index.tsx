import React, { MouseEvent, useState, useEffect } from "react";

import { Container } from "./styles";

export interface Items {
    id: number;
    title: string;
}

interface FilterList {
    items: Items[];
    colorPrimary?: string;
    onChange: Function;
}

const FilterList: React.FC<FilterList> = ({
    items,
    onChange = () => {},
    colorPrimary,
}) => {
    const [listItems, setListItems] = useState(items);
    const [selectedItems, setSelectedItems] = useState<Items[]>([]);

    useEffect(() => {
        onChange(selectedItems);
    }, [selectedItems, onChange]);

    function handleClick(event: MouseEvent): void {
        const target = event.target as HTMLLIElement;
        const targetTitle = target.getAttribute("data-title");

        if (target.getAttribute("data-selected")) {
            const item = selectedItems.filter(
                (item) => item.title === targetTitle
            );
            const parsedSelectedItems = selectedItems.filter(
                (item) => item.title !== targetTitle
            );
            setSelectedItems(parsedSelectedItems);

            const parsedListItems = listItems.concat(item);

            setListItems(parsedListItems);
        } else {
            const item = listItems.filter((item) => item.title === targetTitle);
            const parsedlistItems = listItems.filter(
                (item) => item.title !== targetTitle
            );
            setListItems(parsedlistItems);

            const parsedSelectedItems = selectedItems.concat(item);

            setSelectedItems(parsedSelectedItems);
        }
    }

    function renderList() {
        const renderedListItems = listItems
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item) => (
                <li key={item.id} data-title={item.title}>
                    {item.title}
                </li>
            ));
        const renderedSelectedItems = selectedItems
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((item, index, array) => {
                if (index === array.length - 1 && listItems.length > 0) {
                    return (
                        <li
                            key={item.id}
                            className="last_selected"
                            data-title={item.title}
                            data-selected="true"
                        >
                            {item.title}
                        </li>
                    );
                }
                return (
                    <li
                        key={item.id}
                        data-title={item.title}
                        data-selected="true"
                    >
                        {item.title}
                    </li>
                );
            });

        return renderedSelectedItems.concat(renderedListItems);
    }

    return (
        <Container colorPrimary={colorPrimary}>
            <ul onClick={handleClick}>{renderList()}</ul>
        </Container>
    );
};

export default FilterList;
