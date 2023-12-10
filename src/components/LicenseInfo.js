import img3 from '../img/noun_copyright_1947635.png';

const LicenseInfo = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div class='row'>
          <div class='col-md-7'>
            <h2 className='feature-heading'>What is Creative Commons? </h2>
            <p>
              {' '}
              Copyright can make sharing and collaboration illegal at times when
              sharing information in new ways might allow constructive criticism
              and growth. It was necessary to create Creative Commons "to help
              address the tension between the creator’s ability to share digital
              works globally and copyright regulation."<sup>1.</sup>
            </p>
          </div>
          <div class='col-md-5'>
            <img
              src={img3}
              alt='Created by Vectorstall from Noun Project'
              width='450'
              height='400'
              class='img-fluid'
            />
          </div>
        </div>

        <div class='row'>
          <p>
            When the Sonny Bono Copyright term Extension Act (CTEA) extended
            copyright terms, Lawrence Lessig, a Stanford Law Professor, believed
            the changes to the law to be unconstitutional. The end of a work's
            copyright, and its movement into the public domain, is often the
            beginning of a new cycle of sharing and growth. Is restricting that
            growth and creativity by adding 20 years to the copyright term truly
            supported by the constitution?{' '}
          </p>

          <p>
            And so Lawrence Lessig represented a web publisher, Eric Eldred in
            an effort to challenge the constitutionality of the CTEA in a case
            known as Eldred v. Ashcroft. Even though they didn’t win the case,
            which went all the way to the Supreme Court, their efforts helped to
            define a need for new ways to make online sharing legal.
          </p>

          <p>
            Eldred's ideas about creating,remixing and sharing content became an
            inspiration for Lessig and others. They founded Creative Commons
            (CC), a nonprofit organization that offers new licenses with
            flexible terms. In time, CC has grown as an organization, as a set
            of licenses, and as a part of a movement. CC licenses work within
            copyright law to allow additional levels of sharing and
            collaboration: they change “all rights reserved” to “some rights
            reserved.” The licenses also stay current in a changing legal
            environment.
          </p>

          <p>
            As a legal tool that offers clear options and addresses an obvious
            need, Creative Commons licenses are often useful, and as long as
            technology continues to change faster than the laws that govern it,
            the need for new licenses will continue to grow. "In domains like
            textbook publishing, academic research, documentary film, and many
            more, restrictive copyright rules continue to inhibit creation,
            access, and remix. CC tools are helping to solve this problem."
            <sup>2.</sup>
          </p>

          <p>
            <i>
              There are 6 main licenses currently available through Creative
              Commons to help people with different needs, and more than 1.6
              billion works online across 9 million websites use Creative
              Commons licenses.
            </i>
          </p>

          <p>
            {' '}
            from: "https://certificates.creativecommons.org/cccertedu/" Creative
            Commons Certificate for Educators and Librarians Unit 1.1, Enter
            Creative Commons, by Creative Commons, licensed
            href="https://creativecommons.org/licenses/by/4.0/legalcode"
            Creative Commons Attribution 4.0 International License
          </p>

          <p>
            Creative Commons has become a standard tool in a community of users
            who are interested in supporting sharing and collaboration. A
            movement is growing, and those who would like to get involved in the{' '}
            <a href='https://network.creativecommons.org/'>CC Global Network</a>{' '}
            can join "Network Platforms" and work in different areas of interest
            like education, culture, science, copyright reform, government
            policy, and other sectors. There is a place for everyone who would
            like to help! <sup>3.</sup>
          </p>
        </div>
        <div className='frame'>
          <iframe
            src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Ts3vmLEVOklz5KfWUwhyw9NQcudfIqwo9GSlQWqEn2I&font=Default&lang=en&initial_zoom=2&height=650'
            width='100%'
            height='650'
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder='0'
            title='What is Creative Commons?'
          ></iframe>

          <b>References</b>
          <div class='references'>
            image:{' '}
            <a href='https://thenounproject.com/search/?q=creative%20commons&i=1947635'>
              copyright by Vectorstall
            </a>{' '}
            from <a href='https://thenounproject.com/'>the Noun Project</a>,
            licensed{' '}
            <a href='https://creativecommons.org/licenses/by/3.0/us/legalcode'>
              CC BY 3.0
            </a>
            .
          </div>

          <div class='references'>
            1. from:{' '}
            <a href='https://certificates.creativecommons.org/cccertedu/'>
              Creative Commons Certificate for Educators and Librarians
            </a>{' '}
            Unit 1.1, The Story of Creative Commons, by Creative Commons,
            licensed{' '}
            <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>
              {' '}
              Creative Commons Attribution 4.0 International License
            </a>
          </div>

          <div class='references'>
            2. from:{' '}
            <a href='https://certificates.creativecommons.org/cccertedu/'>
              Creative Commons Certificate for Educators and Librarians
            </a>{' '}
            Unit 1.1, Enter Creative Commons, by Creative Commons, licensed{' '}
            <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>
              Creative Commons Attribution 4.0 International License
            </a>
          </div>

          <div class='references'>
            3. from:{' '}
            <a href='https://certificates.creativecommons.org/cccertedu/'>
              Creative Commons Certificate for Educators and Librarians
            </a>{' '}
            Unit 1.2, Supporting the movement, by Creative Commons, licensed{' '}
            <a href='https://creativecommons.org/licenses/by/4.0/legalcode'>
              Creative Commons Attribution 4.0 International License{' '}
            </a>
          </div>

          <div class='references'>
            3. Knightlab: for{' '}
            <a href='https://timeline.knightlab.com/'>TimelineJS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseInfo;
