import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({data}) =>  {
  console.log(data)
  return (
    <div>
      <Header />
      <div className="container" style={{marginTop:'75px', minHeight:'750px'}}>
        <section className="section">
          <p className='is-size-1'>My Site's Files</p>
          <table className='table is-fullwidth'>
            <thead className='thead'>
              <tr className='tr'>
                <th className='th'>relativePath</th>
                <th className='th'>prettySize</th>
                <th className='th'>extension</th>
                <th className='th'>birthTime</th>
              </tr>
            </thead>
            <tbody className='tbody'>
              {data.allFile.edges.map(({ node }, index) =>
                <tr key={index} className='tr'>
                  <td className='td'>
                    {node.relativePath}
                  </td>
                  <td className='td'>
                    {node.prettySize}
                  </td>
                  <td className='td'>
                    {node.extension}
                  </td>
                  <td className='td'>
                    {node.birthTime}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
query MyFilesQuery {
  allFile {
    edges {
      node {
        relativePath
        prettySize
        extension
        birthTime(fromNow:true)
      }
    }
  }
}
`