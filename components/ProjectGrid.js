import Layout from './Layout'
import Back from './Back'
import Elevator from './Elevator'

const ProjectGrid = ({ children, ...props }) => {
  return (
    <Layout title={props.title} dark={props.dark}>
      <Back />
      <div className="project">{children}</div>
      <Elevator />
    </Layout>
  )
}

export default ProjectGrid
