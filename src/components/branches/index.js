import styled from 'styled-components';

export function BranchComponent(props) {
  
  if(props.list === 'undefined') {
    props.list = [];
  }

  return (
    <>
      <BranchComponent.wrapper>
      <ul className="branch-component">
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
      </BranchComponent.wrapper>
    </>
  )
}
BranchComponent.wrapper = styled.div`
  background-color: #ffffff;
  padding: 5px;
`; 