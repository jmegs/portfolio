import Layout from './Layout'
import Back from './Back'

const ProjectGrid = ({ children, ...props }) => {
  return (
    <Layout title={props.title} dark={props.dark}>
      <Back />
      <div className="project">{children}</div>
      <style jsx>
        {`
          .project {
            display: grid;
            grid-template-columns: minmax(auto, 1fr) minmax(auto, 60ch) minmax(
                auto,
                1fr
              );
          }
        `}
      </style>
      <style jsx global>
        {`
          .project h1,
          .project p {
            grid-column: 2;
          }
          .project h1 {
            margin-bottom: 32px;
          }

          .project p {
            margin-bottom: 84px;
            font-size: calc(16px + 4 * ((100vw - 375px) / 1225));
            line-height: 1.8;
          }

          @media screen and (min-width: 1600px) {
            .project p {
              font-size: 20px;
            }
          }

          @media screen and (max-width: 375px) {
            .project p {
              font-size: 16px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default ProjectGrid
