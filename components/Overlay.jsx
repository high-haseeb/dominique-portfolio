import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section
      className={`h-[400vh] w-screen lg:w-1/2 flex flex-col justify-center p-10 ${props.right ? "lg:translate-x-[50vw]" : ""}`}
      style={{ backgroundColor: props.backgroundColor, borderRadius: 40 }}
    >
      <div className="flex items-center justify-center">
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
          <h1 className="">
            <h3 class="section-text">
              Hey everyone! My name is Dominique, but you can just call me Mimi – most of my friends do! I’m a Web Design &amp; Development Student at
              SAE Vienna. Step right in and take a peek into my world. My room has a few items that tell the story of my life. Come on let's take a
              stroll together, shall we? Though I might come across as shy initially, once we break the ice, you'll find I'm the chattiest person
              around. As you can tell its not my shy personality but my “alter ego” is writing about me here. So no shyness around here.
            </h3>
            <h3 class="section-heading">Mimi who?</h3>
            <p class="section-text">
              Who am I, you ask? Well, I'm a creative soul who loves to think outside the box and dance to the beat of my own drum. Some may call me
              delusional, but I prefer to think of myself as a dreamer - someone who sees the world through a different lens, filled with possibility
              and wonder. My coding enthusiasm? That's a gift from my grandfather, whose guidance ignited a spark that's been following me ever since.
            </p>
            <h3 class="section-heading">Why the Obsession with "Friends"?</h3>
            <p class="section-text">
              And as for my obsession with "Friends," well, it all started when I was just a kid and supposed to be in bed already, I loved sneaking
              peeks at the TV while my mom watched her favorite show at night. It's more than just a comforting series to me – every episode is a
              reminder that no matter how tough life gets, there's always a bit of sunshine waiting to break through the clouds.
            </p>
            <h3 class="section-heading">Grandpa's Tech Bootcamp</h3>
            <p class="section-text">
              Was it strict grandpa syndrome or a stroke of genius? Either way, Grandpa's insistence on coding paved the way for me. With my grandpa
              by my side, it's been a wild and wonderful ride. He may have pushed me kicking and screaming into the world of computers, but looking
              back, I'm grateful for every moment. It turns out, those late-night coding sessions and frustrating tech challenges were just the
              beginning of a beautiful journey that's led me here - to you, to this moment, and to all the adventures that await. Thanks, Grandpa, for
              making me stick to it!
            </p>
          </h1>
        </Section>
        <Section backgroundColor="#CDB4DB" right>
          <div class="section-detail-wrapper">
            <h3 class="section-heading">School Shenanigans </h3>
            <p class="section-text">
              School was a wild ride, to say the least. Somehow, I managed to be both the most popular and the most introverted person in the room. It
              was all about finding the balance between social interaction and solitude, a dance that I've been perfecting ever since. And now, as I
              near the end of my bachelor's program in web design and development at SAE Vienna, I can't help but marvel at how far I've come.
            </p>
            <h3 class="section-heading">Work Wonders </h3>
            <p class="section-text">
              But let's talk about my adventures in the world of work, shall we? After school, I dove headfirst into the fast-paced world of
              e-commerce, joining the team at BAMBINIFASHION.COM. As the logistics and customer satisfaction specialist, I was not only responsible
              for ensuring that every order was processed seamlessly, but also checking every single order for potential frauds, saving the company
              from scammers. It was a challenging role that taught me the importance of attention to detail and quick thinking, basically skills that
              would also serve me well in the years to come.
            </p>
            <h3 class="section-heading">From Bling to Cha-Ching</h3>
            <p class="section-text">
              In 2020, I took a leap of faith and launched my own jewelry brand, called Joselie Jewelry. With nothing but a dream and a starting
              capital (all of my savings throughout the years) of €3000, I set out to create something truly special. And you know what? Against all
              odds, I did it. From designing the website, the jewelry and the branding to negotiating with stores and influencers, every aspect of the
              business was a labor of love. And the results speak for themselves - in just one and a half years, I turned that €3000 into a €430,000
              in revenue. It was a wild ride, to say the least, but one that I wouldn't trade for anything in the world. But theres a famous saying:
              “All good things must come to an end”, which is a hundred percent true. In April of 2022 I sold the company and said bye bye to
              enterpreneurship and got back to my true passion, which is, yep you guessed right: coding.
            </p>
          </div>
        </Section>

        <Section backgroundColor="#DBBABA">
          <div class="section-detail-wrapper">
            <h3 class="section-heading">VIPs (Very Important Peeps) </h3>
            <p class="section-text">
              Now, let's talk about the VIPs in my life, whom you can also see on my wall in the picture frames - my parents, my cousins, and my best
              friend. They're the real MVPs, standing by me through thick and thin, supporting my dreams and cheering me on every step of the way.
              Without their love and encouragement, I wouldn't be the person I am today.
            </p>
            <h3 class="section-heading">Transforming Vision into Visual Gold</h3>
            <p class="section-text">
              When it comes to design, I'm all in! I have a strong passion for design, which has led me to work on various projects in the past. For
              instance, I had the opportunity to design the logo and branding for Joselie, where I focused on capturing the essence of the brand
              through visual elements.
            </p>
            <h3 class="section-heading">Revolutionizing Household Chores</h3>
            <p class="section-text">
              My journey in design continued during my academic pursuits, where I engaged in practical projects aimed at applying theoretical
              knowledge to real-world scenarios. One such project involved the development of a cleaning app. This innovative application was designed
              to simplify the cleaning process by providing users with clear, step-by-step instructions and assistance whenever needed. Through
              meticulous planning and execution, I ensured that the app offered a seamless experience, making household chores a breeze for users.
            </p>
            <h3 class="section-heading">Let's Clean Bugs and Conquer the Web!</h3>
            <p class="section-text">
              Looking forward, I am eager to embrace new challenges and contribute my skills to future projects. Problem-solving and bug fixing are
              areas where I thrive, and I am always ready to tackle technical obstacles head-on. Whether it's refining existing systems or venturing
              into uncharted territory, I am committed to driving innovation and achieving results.
            </p>

            <div class=" section-detail-wrapper cv ">
              <h1>Contact Me</h1>
              <p> Dominique Gavrielov</p>
              <p> E-mail: gavrielovd@gmail.com</p>
              <p> Mobile: +436643049059 </p>

              <h1>Wasn't enough?</h1>
              <p>Don't worry you can download the boring version of my cv here</p>
              <a href="/Curriculum Vitae.pdf" download class="button button--download">
                {" "}
                Download <span class="u-bolder">CV</span>
              </a>
            </div>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};
