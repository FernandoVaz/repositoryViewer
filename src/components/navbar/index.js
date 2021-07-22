import styled from 'styled-components';

// =======================================================================================================================
// NAVBAR
// =======================================================================================================================
export function NavbarRepoViewer() {
    return (
        <NavbarRepoViewer.wrapper>
            <ul>
                <li>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                         alt="Girl in a jacket" 
                         width="35" 
                         height="35" />
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/techmap">TechMap</a>
                </li>
                <li>
                    <a href="/metrics">Metrics</a>
                </li>
            </ul>
        </NavbarRepoViewer.wrapper>
    )
}
NavbarRepoViewer.wrapper = styled.header`
    border-radius: 0px;
    width: 100%;
    padding: 5px;
    background: rgba(255, 255,255, 1);
    ul {
        align-items: stretch; /* Default */
        justify-content: space-between;
        margin: 0;
        padding: 0;
        margin-bottom: 5px;    
        li {
            display: inline;
            list-style-type: none;
            margin-left: 25px;
            vertical-align: middle;
            a:link, a:visited {
                color: black;
                text-align: center;
                text-decoration: none;
                display: inline-block;
              }
              
              a:hover, a:active {
                color: grey;
              }
        }
        li:first-child {
            margin-right: 50px;
        }
    }
`;