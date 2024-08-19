import { ThreeDots } from "react-loader-spinner";

function Loading({ width, height }) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        color=" rgb(var(--color-primary-900))"
        radius={9}
        wrapperStyle={{
          display:"flex",
          justifyContent:"center"
        }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
