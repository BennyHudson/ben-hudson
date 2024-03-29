// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/react-in-jsx-scope */

/** *************************************************************************** */
/** Import - helpers                                                            */
/** --------------------------------------------------------------------------- */
/** Imports that are not being mocked or tested                                 */
/** *************************************************************************** */

/** *************************************************************************** */
/** Import - tested files                                                       */
/** --------------------------------------------------------------------------- */
/** Imports that unit tests will be written against                             */
/** *************************************************************************** */
import Footer from '../Footer'

/** *************************************************************************** */
/** Import - mocked files                                                       */
/** --------------------------------------------------------------------------- */
/** Imports that are defined only to be mocked eg stores, utils. helpers        */
/** *************************************************************************** */

/** *************************************************************************** */
/** Jest mocks                                                                  */
/** --------------------------------------------------------------------------- */
/** Globally defined jest mocks                                                 */
/** *************************************************************************** */

/** *************************************************************************** */
/** Unit testing                                                                */
/** *************************************************************************** */

describe('<Footer />', () => {
  describe('render', () => {
    const wrapper = shallow(<Footer />)
    it('should render', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })
})
