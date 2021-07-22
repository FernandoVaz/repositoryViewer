import styled from 'styled-components';

export function RepositoryComponent(props) {
  
  if(props.list === 'undefined') {
    props.list = [];
  }

  return (
    <>
      <RepositoryComponent.wrapper>
      <ul className="repository-component">
        {props.list.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.html_url} >
                  <span>{itemAtual.full_name}</span>
                </a>
              </li>
            )}
          )}
      </ul>
      </RepositoryComponent.wrapper>
    </>
  )
}
RepositoryComponent.wrapper = styled.div`
  background-color: #ffffff;
  padding: 5px;
`; 