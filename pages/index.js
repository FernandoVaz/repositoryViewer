import React from 'react';
import styled from 'styled-components';
import branch from '../src/components/branches';
import { NavbarRepoViewer } from '../src/components/navbar'
import { RepositoryComponent } from '../src/components/repository';

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
  }
  .repoArea {
    display: block;
  }
  .commitArea {
    display: block;
  }
`;

export default function Home() {

  const [branches, setBranches] = React.useState([]);
  const [repositories, setRepositories] = React.useState([]);
  const [commits, setCommits] = React.useState([]);


  React.useEffect(function () {
      fetch('/api/github')
      .then(async (response) => {
        const dados = await response.json();
        console.log(dados);
        setRepositories(dados.dataResponse.repo.items);
        setCommits(dados.dataResponse.commit)
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);
  

  // function buildSetCommits(repos) {
  //   fetch('api/commit')
  //   .then(async (response) => {
  //     const dados = await response.json();
  //     console.log(dados);
  //   })
  // }

  // React.useEffect(function () {

  // }, [repositories])


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
          
        </div>
      </Main>
    </>
  )
}
