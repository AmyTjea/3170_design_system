import AlertDisplay from "./component/ui_display/AlertDisplay";
import ButtonDisplay from "./component/ui_display/ButtonDisplay";

export default function Home() {
  return (
    <div className="bg-background p-4 w-full h-full flex flex-col align-middle items-center">
      <div className="flex flex-col wrap-normal align-middle  ">
        <ButtonDisplay />
        <AlertDisplay/>
      </div>


    </div>

  );
}
