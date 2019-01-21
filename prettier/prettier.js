
import format from './format'
import taskService from '../lib/taskService'

export default taskService({
  serviceName: 'prettier',
  task: format,
})
