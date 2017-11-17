import { CHARACTERISTIC_CHANGE, SKILL_CHANGE, SKILL_CHECK } from '../actions'

const defaultState = {

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

    case CHARACTERISTIC_CHANGE:

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

    case SKILL_CHANGE:

      let valueSkill = state.skills[action.skill] ? false : true
      let countSkill = 0      

      Object.keys(state.skills).map((key, i) => {
        if (key === action.skill) {
          countSkill = valueSkill ? countSkill + 1 : countSkill - 1
        }
        else if (state.skills[key] === true) {
          countSkill++          
        }
        return key
      })

      return {
        ...state,
        countSkill,
        skills: {
          ...state.skills,
          [action.skill]: valueSkill
        }
      }

    case SKILL_CHECK:

    let check = [action.check]

      return {
        ...state,
        check
      }

    default:
      return state
  }
}

export default character