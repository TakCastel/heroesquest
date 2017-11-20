import { 
  CHANGE_NAME,
  CHANGE_CHARACTERISTIC, 
  CHANGE_SKILL, 
  CHANGE_RACE,
  CHECK_SKILL,
} from '../actions'

const defaultState = {

  name: '',
  race: 'default',

  // Characteristics
  characteristics: {
    strenght: 1,
    health: 1,
    magicka: 1,
    stamina: 1,
    charge: 1,
    luck: 1,
  },

  // Skills
  skills: {
    parade: false, 
    forge: false, 
    fortress: false, 
    athletism: false, 
    hammer: false, 
    blade: false,
    security: false, 
    discretion: false, 
    climbing: false, 
    spotting: false, 
    accuracy: false, 
    dodging: false,
    alchemy: false, 
    agility: false, 
    healing: false, 
    scroll: false, 
    spell: false, 
    hands: false,
  },
  
  // Characteristics calculation
  totalSpentInCharacteristics: 6,

  //Skills calculation
  countSkill: 0,
}

const character = (state = defaultState, action) => {
  switch (action.type) {

    case CHANGE_NAME:

      return {
        ...state,
        name: action.name
      }

    case CHANGE_CHARACTERISTIC:

      let valueCharacteristic = state.characteristics[action.characteristic] + action.value
      let totalCharacteristic = state.totalSpentInCharacteristics + action.value

      return {
        ...state,
        totalSpentInCharacteristics: totalCharacteristic,      
        characteristics: {
          ...state.characteristics,
          [action.characteristic]: valueCharacteristic
        }
      }

    case CHANGE_SKILL:

      let valueSkill = state.skills[action.skill] ? false : true

      return {
        ...state,
        countSkill: valueSkill ? state.countSkill + 1 : state.countSkill - 1,
        skills: {
          ...state.skills,
          [action.skill]: valueSkill
        }
      }

    case CHANGE_RACE:

      return {
        ...state,
        race: action.race
      }

    case CHECK_SKILL:
  
      return {
        ...state,
        countSkill: defaultState.countSkill,
        skills: {
          ...defaultState.skills,
          [action.skill]: true
        }
      }

    default:
      return state
  }
}

export default character