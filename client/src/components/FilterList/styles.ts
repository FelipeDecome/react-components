import styled from "styled-components";

const Default = {
    primary: "#333",
    text: "#fff",
};

interface Props {
    colorPrimary: string | any;
}

export const Container = styled.div<Props>`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;

        li {
            content: attr(data-content);
            margin: 0 4px;
            padding: 4px 16px;
            border: 2px solid
                ${(props) =>
                    props.colorPrimary ? props.colorPrimary : Default.primary};
            border-radius: 16px;
            color: ${(props) =>
                props.colorPrimary ? props.colorPrimary : Default.primary};

            &[data-selected="true"] {
                background-color: ${(props) =>
                    props.colorPrimary ? props.colorPrimary : Default.primary};
                color: ${Default.text};

                &.last_selected {
                    position: relative;
                    margin-right: 20px;

                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0;
                        right: -15px;
                        height: 100%;
                        width: 1px;
                        background-color: ${(props) =>
                            props.colorPrimary
                                ? props.colorPrimary
                                : Default.primary};
                    }
                }
            }
        }
    }
`;
