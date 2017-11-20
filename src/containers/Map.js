import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state, ownProps) => ({
  map: state.map
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // characteristicChange: (characteristic, value) => {
    //   dispatch(characteristicChange(characteristic, value))
    // }
})

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer