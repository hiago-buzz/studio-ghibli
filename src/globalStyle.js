import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --color-primary: #2c4e6a;
    --color-brown: #73442f;
    --color-danger: #db032f;
    --color-light: #F5F5F5;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    min-height: 100%;
    background: var(--color-light);

    font-family: Arial, Helvetica, sans-serif;
}

a:link, a:visited {
	text-decoration: none
    }
a:hover {
    text-decoration: underline; 
    color: #f00
    }
a:active {
    text-decoration: none
    }  

.App {
    display: flex;
    justify-content: space-between;
}
`

