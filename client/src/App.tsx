import React from "react";

import { GlobalStyle } from "./components/GlobalStyle";
import FilterList, { Items } from "./components/FilterList";

function App() {
    function handleChange(values: Items[]) {
        console.log(values);
    }

    return (
        <>
            <GlobalStyle />
            <FilterList
                items={[
                    { id: 1, title: "Horror" },
                    { id: 2, title: "Ação" },
                    { id: 3, title: "Aventura" },
                    { id: 4, title: "Comédia" },
                    { id: 5, title: "Suspense" },
                ]}
                onChange={handleChange}
                colorPrimary={"#bd34d1"}
            />
        </>
    );
}

export default App;
