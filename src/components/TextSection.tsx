import { Text } from "@react-three/drei"

const TextSection = ({title, subtitle, ...props}:{title?: string, subtitle?: string}) => {
  return (
    <group {...props}>
      { !!title && (
        <Text
          color="black"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/NanumGothic-ExtraBold.ttf"}
        >
          {title}
        </Text>
      )}

      <Text
        color="black"
        anchorX={"left"}
        anchorY="top"
        fontSize={0.2}
        maxWidth={2.5}
        font={"./fonts/NanumGothic-ExtraBold.ttf"}
      >
        {subtitle}
      </Text>
    </group>
  )
}

export default TextSection