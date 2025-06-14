import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px 123px;

        @media (max-width: 800px) {
            padding: 32px 16px;
        }
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;


export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 36px;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 20px;
        }
    }
`;