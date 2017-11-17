import { connect } from 'react-redux'
import Quest from '../components/Quest'

const mapStateToProps = (state, ownProps) => ({
  quest: state.quest
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // characteristicChange: (characteristic, value) => {
    //   dispatch(characteristicChange(characteristic, value))
    // }
})

const QuestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quest)

export default QuestContainer