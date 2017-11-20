export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_CHARACTERISTIC = 'CHANGE_CHARACTERISTIC'
export const CHANGE_SKILL = 'CHANGE_SKILL'
export const CHANGE_RACE = 'CHANGE_RACE'
export const CHECK_SKILL = 'CHECK_SKILL'

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name: name
})

export const changeCharacteristic = (characteristic, value) => ({
  type: CHANGE_CHARACTERISTIC,
  characteristic: characteristic,
  value: value
})

export const changeSkill = (skill) => ({
  type: CHANGE_SKILL,
  skill: skill
})

export const changeRace = (race) => ({
  type: CHANGE_RACE,
  race: race
})

export const checkSkill = (skill) => ({
  type: CHECK_SKILL,
  skill: skill,
})