import { colorFamilies } from "./colorData";
import { getReadableTextColor } from "./getReadableTextColor";

export default function ColorRamps() {
  return (
    <div className="colorRamp colHolder colGap12 colWrap">
      {colorFamilies.map((family) => (
        <div key={family.name} className="colRowHolder">
          {family.steps.map((step) => (
            <div
              className="colorHolder"
              key={step.label}
              style={{
                backgroundColor: step.hex,
                color: getReadableTextColor(step.hex),
              }}
            >
              {step.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}