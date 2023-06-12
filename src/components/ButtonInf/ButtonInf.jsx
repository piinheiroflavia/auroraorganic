import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    NewspaperIcon,
    UserGroupIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
  const ButtonInf = () => {
    const labelProps = {
      variant: "small",
      color: "blue-gray",
      className:
        "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
   
    return (
      <div className="relative h-80 w-full ">
        <div className="fixed bottom-10 right-5  bg-aurora-fundoErro">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <PlusIcon className="h-9 w-9 mr-7 mt-5 transition-transform group-hover:rotate-45 rounded-full  bg-aurora-fundoErro" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>

              <SpeedDialAction className="relative my-1 mr-3">
                <a href="/auroraorganic">
                  <HomeIcon className="h-7 w-7 rounded-full " />
                  <Typography {...labelProps}>Home</Typography>
                </a>  
              </SpeedDialAction>

              <SpeedDialAction className="relative my-1 mr-3">
                <a href="/auroraorganic/skincare">
                  <Square3Stack3DIcon className="h-7 w-7 rounded-full " />
                  <Typography {...labelProps}>SkinCare</Typography>
                </a>
              </SpeedDialAction>

              <SpeedDialAction className="relative my-1 mr-3">
                <a href="/auroraorganic/aromaterapia">
                  <Square3Stack3DIcon className="h-7 w-7 rounded-full " />
                  <Typography {...labelProps}>Aromaterapia</Typography>
                </a>
              </SpeedDialAction>

              <SpeedDialAction className="relative my-1 mr-3">
                <a href="/auroraorganic/blog">
                  <NewspaperIcon className="h-7 w-7 rounded-full " />
                  <Typography {...labelProps}>Blog</Typography>
                </a>
              </SpeedDialAction>

              <SpeedDialAction className="relative my-1 mr-3">
                <a href="/auroraorganic/sobre-nos">
                  <UserGroupIcon className="h-7 w-7 rounded-full " />
                  <Typography {...labelProps}>Sobre Nós</Typography>
                </a>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }

export default ButtonInf;