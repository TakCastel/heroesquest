import { connect } from 'react-redux'
import Character from '../components/Character'
import { 
  characteristicChange, 
  skillChange,
  skillCheck
} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  character: state.character
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    characteristicChange: (characteristic, value) => {
      dispatch(characteristicChange(characteristic, value))
    },
    skillChange: (skill) => {
      dispatch(skillChange(skill))
    },
    skillCheck: (check) => {
      dispatch(skillCheck(check))
    }
})

const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)

export default CharacterContainer