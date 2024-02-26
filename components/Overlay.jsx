import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section
      className={`h-[200vh] w-screen lg:w-1/2 flex flex-col justify-center p-10 ${props.right ? "lg:translate-x-[50vw]" : ""}`}
      style={{ backgroundColor: props.backgroundColor, borderRadius: 40 }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  return (
    <Scroll html>
      <div class="w-screen flex flex-col gap-[200vh] overflow-hidden">
        <div className="w-screen h-screen flex  md:items-end md:justify-start items-end justify-center lg:p-40 p-10">
          <div className="text-5xl text-black text-center font-semibold flex flex-col items-start gap-4">
            Dominique Gavrielov
            <span className="text-lg font-normal">Web Design & Development Student</span>
          </div>
        </div>
        <Section backgroundColor="#DBBABA">
          <h1 className="text-9xl text-[#EF5DA3]  font-bold">Between Songy and Haseeb</h1>
        </Section>
        <Section backgroundColor="#CDB4DB" right>
          <h1 className="text-9xl text-[#FFC8DD]  font-bold">Between Songy and Haseeb</h1>
        </Section>

        <Section backgroundColor="#DBBABA">
          <h1 className="text-9xl text-[#64A681]  font-bold">Between Songy and Haseeb</h1>
        </Section>
      </div>
    </Scroll>
  );
};
