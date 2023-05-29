
import Layout from '../Layout'

function Chain() {
  return (
    <Layout title="SUPPORTED CHAINS">
        <div>
            <div className='relative text-center mx-auto'>
                <img src="assets/chain-box.svg" alt="" className='mx-auto'/>
                <div className='absolute top-[12%] left-[17%]'>
                    <div className='flex items-center gap-4'>
                        <img src="assets/corp.svg" alt="" />
                        <div className='a '>
                            <h2 className='font-arc text-4xl font-semibold uppercase text-white pb-3'>arbitrum</h2>
                            <p className='font-arc text-[#ffffffb6] text-start uppercase'>layer 2 EVM Chain</p>
                        </div>

                    </div>

                </div>

                <div className='flex justify-center mt-6 mb-3'>
                    <img src="assets/chain-img.svg" alt="" />


                </div>
            </div>
        </div>

    </Layout>
  )
}

export default Chain