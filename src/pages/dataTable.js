
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const DataTableCalc = ( {data}) => {


    const priceTemplate = (rowData) => {

        return (
            <>
                {rowData.code}
            </>
        );

    }
    // const [products, setProducts] = useState([])
    
    // const processViewModel = (data) => {
    //     const outhtml = data.map((item) => {
    //         return {
    //             code: item.code,
    //             name: item.name,
    //             category: item.category,
    //             quantity: item.quantity
    //         }
    //     })

    // }
    return (
        <DataTable value={data} showGridlines size="small" className='uaiDatatable'
        >
            <Column field="name" header="Name"></Column>
            <Column field="ph" header="Code" ></Column>
            <Column field="secondsprocess" header="secondsprocess"></Column>
            <Column field="requestPrice" header="requestPrice"></Column>
            <Column field="processPerEstimatedRuntime" header="Estimated Runtime Requests"></Column>
            <Column field="estimatedruntimePrice" header="Estimated Runtime Price"></Column>
            <Column field="totalRequestsPerHour" header="totalRequestsPerHour"></Column>
            <Column field="price24Hours" header="price24Hours"></Column>
            <Column field="price1Month" header="price1Month"></Column>
            <Column field="price1Year" header="price1Year"></Column>
            <Column field="priceTimeHalf" header="priceTimeHalf"></Column>
            <Column field="priceTimeQuarter" header="priceTimeQuarter"></Column>
            {/* <Column field="totalHourPer5Dollar" header="totalHourPer5Dollar"></Column> */}

        </DataTable>
    );

}
 
export default DataTableCalc;