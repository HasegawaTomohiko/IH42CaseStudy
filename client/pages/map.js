import SampleSideMenu from "@/components/layout/sideMenu";
import LeafletMap from '../components/dashboard/map/LeafletMap';

    export default function Map() {
        return (
          <>
              <SampleSideMenu menutitle="運送マップ"/>
    <div>
      <LeafletMap />
    </div>
          </>
        )
      }