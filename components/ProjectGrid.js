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
          .project header {
            grid-column: 2;
            margin-bottom: 48px;
          }
          .project h1 {
            margin-bottom: 32px;
          }

          .project p {
            margin-bottom: 32px;
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

          .project small {
            font-size: 13px;
            line-height: 22px;
            color: #545454;
          }

          .project small ul {
            margin-bottom: 32px;
          }
        `}
      </style>
    </Layout>
  )
}

export default ProjectGrid
