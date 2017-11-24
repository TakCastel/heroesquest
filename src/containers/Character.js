import { connect } from 'react-redux'
import Character from '../components/Character'
import { 
  changeName,
  changeCharacteristic, 
  changeSkill,
  changeRace,
  checkSkill
} from '../actions'

const mapStateToProps = (state, ownProps) => ({
  ...state.character
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeName: (name) => {
      dispatch(changeName(name))
    },
    changeCharacteristic: (characteristic, value) => {
      dispatch(changeCharacteristic(characteristic, value))
    },
    changeSkill: (skill) => {
      dispatch(changeSkill(skill))
    },
    changeRace: (race) => {
      dispatch(changeRace(race))
    },
    checkSkill: (skill) => {
      dispatch(checkSkill(skill))
    }
})

const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)

export default CharacterContainer