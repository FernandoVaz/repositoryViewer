import styled from 'styled-components';

export function CommitComponent(props) {
  
  if(props.list === 'undefined') {
    props.list = [];
  }

  return (
    <>
      <CommitComponent.wrapper>
      <ul className="commit-component">
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
      </CommitComponent.wrapper>
    </>
  )
}
CommitComponent.wrapper = styled.div`
  background-color: #ffffff;
  padding: 5px;
`; 