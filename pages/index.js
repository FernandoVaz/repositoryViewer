import React from 'react';
import styled from 'styled-components';
import branch from '../src/components/branches';
import { navbar, NavbarRepoViewer } from '../src/components/navbar'

const Main = styled.div`
  width: 100%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  grid-gap: 10px;
  grid-template-areas: "branchArea repoArea commitArea";
  grid-template-columns: 0.5fr 1fr 0.5fr;
  .branchArea {
    display: block;
    background-color: #ffffff;
  }
  .repoArea {
    display: block;
    background-color: #ffffff;
  }
  .commitArea {
    display: block;
    background-color: #ffffff;
  }
`;


function RepositoryComponent(props) {
  
  return (
    <>
      <h2>({props.list.length}) </h2>
      <ul className="teste">
        {props.list.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={itemAtual.html_url} >
                  <img className="repo-owner-image" src={itemAtual.owner.avatar_url}/>
                  <span>{itemAtual.full_name}</span>
                </a>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default function Home() {

  const [branches, setBranches] = React.useState([]);
  const [repositories, setRepositories] = React.useState([]);
  const [commits, setCommits] = React.useState([]);


  React.useEffect(function () {
      fetch('/api/github')
      .then(async (response) => {
        const dados = await response.json();
        console.log(dados);
        setRepositories(dados.dados.items);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);
  

  return (
    <>
      <NavbarRepoViewer />
      <Main>
        <div className="branchArea" style={{ gridArea: 'branchArea' }}>

        </div>
        <div className="repoArea" style={{ gridArea: 'repoArea' }}>
          <RepositoryComponent list={repositories} />
        </div>
        <div className="commitArea" style={{ gridArea: 'commitArea' }}>
          c
        </div>
      </Main>
    </>
  )
}
