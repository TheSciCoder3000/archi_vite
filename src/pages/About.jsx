import AboutImg from "../assets/img/drawing.jpg"
import ArchiTable from "../assets/img/archi_table.jpg"
import Overlap1 from "../assets/img/overlap1.jpg"
import Overlap2 from "../assets/img/overlap2.jpg"
import "../assets/css/About.css"

const About = () => {
    return (
        <div className="main-about-container">
            <div className="about-hero">
                <img src={AboutImg} alt="about-hero" />
                <div className="grade">
                </div>
                <div className="about-hero-text-container">
                    <h3>ABOUT US</h3>
                    <h1>Shaping Spaces,<br /> Inspiring Lives</h1>
                </div>
            </div>
            <div className="about-description">
                <div className="img-container">
                    <img src={ArchiTable} alt="archi-table" />
                </div>
                <div className="description-content">
                    <h2>Mission and Vision</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Ab neque unde expedita
                        eveniet ea a! Placeat ut laboriosam voluptate
                        sapiente nisi eaque aspernatur temporibus
                        repellat illo distinctio tenetur ullam ad
                        perferendis suscipit illum doloribus dignissimos,
                        quas saepe voluptas molestias veritatis! Quasi
                        quidem repellat atque animi ratione officia! Sequi,
                        aliquid voluptas!
                    </p>
                </div>
            </div>
            <div className="about-quote">
                <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 123"><g id="Layer_2-2"><g fill="none" opacity=".15"><image width="98" height="123" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAB7CAYAAACPfFVdAAAACXBIWXMAAAsSAAALEgHS3X78AAAFHklEQVR4nO2cS28bZRSGHzu3mkCoSkpb6EWIFsGCDahlwQr44V2DlG66SBUqopakIQ5Jo5Kk5GoW73yaiesktms75zPvI1mz8CWTeeac810HjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhj8qZ22SfQJ7W2Y6LVdsyG3ETUgDowCcwAU5T/Qws4BA6KY6vyCk8uIpKAKWAWuAbcBOaQFIAj4A3QBLaBf4vXEXBCcCE5iEgCPgQ+Ae4CD4CvgRsoMgD2gXXgOfAK2ADWgC1gB0XJyShPvBeii5gAGsCnwBfAV8C3SMQdFBFTxWcPUUSsA38DK8AzYAlYRpHyFjge3el3T2QRScJt4DvgB+Ab4B6KjFk614h9lJK2gZfAIvAr8ATJCSlj8uKPXApJwh3gIfAT8D1wC6WoKZSy2m+kOjBdfOZjJKy9lqwAewRLUxFF1Ckj4SHwS3G8DXxAZwGJWuW9VFtmOF3QD4DV4himgE9c9gm0UUN39E3gEZLwCEXGLDrfbtNptaXVQBIPUa3YQinMIs6gji74A+Bn4EdUE2aL9/qhhiJiEkVEak39Q6D01O8/NyxqwBXUSrpXHBu8/3nWUd24i5q9t4q/E6axEklEDaWRq8BnwHUGI6H9tz8vftsizqCGCusNlJpSZ21QFytF23Uk+iqnm7+XSjQRw7xQVdH3UdqbHtBvvzdRRHRKS4NOHelvzCEZqVfuiGhjGt2l9xl8WkqkFtR0cQwhAeKIGNXd2qLs1B0RqB8RRQSUMqYZnoTqwOAbynmLSyeSiMSw0kWL00PlTRQZIYgoYli00KjsBpqv2MYRMXJSWtpGA34bSEoICfD/EXGCZuleosmiNSxi5Jyg+Yc1NEm0hEZfQ7WaIs5HDIoWpYQVYAHN1C2j6Agz8grjKSIJOEQXfA1JeIymS5sEKtKJcRNRFbAJvKDznHWoaIDxEpHSUBOlnyXgKZms4hgXEdVa8ARFwCKKiE0yWNcUUUSvubsq4TdUCxZQbagKCFUT2okkotPa1W6/00SR8BhFQ3XJTGgBiSj9iH4H5FJHbRkJWKCUcNzF98MQRQQoEppoQG6di5e7pCHtLVSQF1E6ShKyIoqI6lhQWkDczRDEPvAXGrZ4ScCOWrdEEQG9j46Gnl/olWgi0nzB73Sfnnot8CGJJqKf9JS+mzWRRMDp9LRKsMmbYRJVxBplAd4l0wLcCxFFpCbp8+K1ycVREWZZTL9EEwG6+3fRONHT4nhWs3TYKz9GRrRl+Ym0LXcK7fqZR6u52xeFHVFu0VpBS+2z68xBXBGgC3qMonYObenttFklpbIXaBNjmCUyvRBZRAtd1APK5ZjX0JrYtH2rhkRsomGOVwRbFNAt0UUcows9gSTM8+5u0kPU+XtGOeBnEUMgpaga2rgyh/bDTVbez75O5CAipahddPfPoMKdZKT09BrJSHUiq6jIRcQxmm/eQeNPSUYDpakWioo/UJ14i0UMhSRjj9MyPqLce72DUtMqGaanXETA+TIaKEWldUybBNtHfRE5iYDzZcwW722gyaIdMoqK3ERAZxlXUGuqQTlrl1VU5CgC3pVxQCmjjnra6wR7usB55CoCOsuYQUL2UNF+TSZDHpHWNfVDatb+Sdnf+BIJCLXs/iKyHTZuIz3faR7t0T6ifIxcFjN84yICykcCTVNGR3qwYnjGSQSc/RxYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wZIf8BLkquZrW6E1MAAAAASUVORK5CYII=" /></g><path d="m51.64,57.61c-.31.14-.61.28-.9.43-2,1.08-3.35,3.13-3.96,5.32s-.54,4.51-.26,6.77c.66,5.19,2.51,10.21,5.32,14.62-6.68-4.63-12.22-11.01-15.25-18.54-3.18-7.91-3.4-16.77.04-24.57,1.87-4.06,5.98-6.87,10.74-6.87,6.53,0,11.82,5.29,11.82,11.82,0,5.02-3.13,9.31-7.55,11.03" /><g fill="none" opacity=".15"><image width="98" height="123" transform="translate(30)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAB7CAYAAACPfFVdAAAACXBIWXMAAAsSAAALEgHS3X78AAAFL0lEQVR4nO2cS28bZRSGH+dKGhra0NIWelFFi2DBBtSyYAX88K5BSjddBIWKiDQlxGkuNElDLrZZvPNpJm7S2KntnM99H8kaKb5N5vE557sOGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHG5E3tok/gnNTajolW2zEbchNRA0aAMWASGKf8H1rAIXBQHFuVR3hyEZEEjAPTwCxwE5hBUgCOgNdAHdgC/iseR0CT4EJyEJEEfAx8CtwFHgJfAzdQZADsA6vAc+BvYA1YATaAHRQlzUGeeDdEFzEKTAGfAfeBr4BvkYg7KCLGi9ceoohYBV4By8DvwAKwiCJlD2gM7vQ7J7KIJOE28B3wA/ANcA9FxjQn14h9lJK2gCVgHvgVeIrkhJQxdvZLLoQk4Q7wCPgJ+B64hVLUOEpZ7T+kEWCieM0nSFh7LVkG3hAsTUUUMUIZCY+AX4rjbeASJwtI1CrPpdoyyfGCfgC8LI5hCvjoRZ9AGzX0i74JPEYSHqPImEbn22k6rba0ppDEQ1QrNlAKs4hTGEEX/CHwM/AjqgnTxXPnoYYiYgxFRGpNbRMoPZ33n+sXNeAj1Eq6VxyneP/zHEF14y5q9t4qvidMYyWSiBpKI1eAz4Hr9EZC+2d/UXy2RZxCDRXWGyg1pc5ary5WirbrSPQVjjd/L5RoIvp5oaqiH6C0N9Gjz35voog4KS31OnWk75hBMlKv3BHRxgT6lT6g92kpkVpQE8UxhASII2JQv9YWZafuiED9iCgioJQxQf8kVAcGX1POW1w4kUQk+pUuWhwfKq+jyAhBRBH9ooVGZdfQfMUWjoiBk9LSFhrwW0NSQkiAD0dEE83SLaHJohUsYuA00fzDCpokWkCjr6FaTRHnI3pFi1LCMjCHZuoWUXSEGXmF4RSRBByiC76CJDxB06V1AhXpxLCJqApYB/7i5DnrUNEAwyUipaE6Sj8LwDMyWcUxLCKqteApioB5FBHrZLCuKaKIbnN3VcJvqBbModpQFRCqJrQTScRJa1c7fU8dRcITFA3VJTOhBSSi9CPOOyCXOmqLSMAcpYRGB+8PQxQRoEioowG5Vc5e7pKGtDdQQZ5H6ShJyIooIqpjQWkBcSdDEPvAP2jYYomAHbVOiSICuh8dDT2/0C3RRKT5gj/oPD11W+BDEk3EedJTem/WRBIBx9PTS4JN3vSTqCJWKAvwLpkW4G6IKCI1SZ8Xj3U+gKiIJgL0699F40TPiuNZzdIw65POS0QRqWivc7yjdtLwdb+X4AyMaPsjqjSKxwhacDbL25tVjij3yi2jPQ/Z9aohtogW6h8cUC7HnEVrYquRfARsIhmvCLYlq1Oii2igCz2KJFyj3E2a9tI1kYg/Uf9jD4voCylF1dDGlRm0Hy6lqCZKSS9Q3yPL9JSDiJSidlERnwQuIxlpRXe1VmSZnnIR0UApJ824XQKuojQ1Vrwm6/SUgwg4LmMP1YhUvCeK53dQyynL9JSLCHi7eF9FO4yqG9q3UZ9jnWD7qM8iJxGJJCPNRzdRVEwWz62hyaIdMoqKHEWk4v0vuuibxd8vo1ZVmrXLKipyFdFAc9ObqJW0hyJiBvUvNtDEUqi7C7yLHEVAmZL2UbN2G0XJJOp5v0FFe5NAu4LeRaR1Td1SjYwXlCnrSyQg1LL7s8h2tLKNdH+na2iP9hHlbeSymMsYFhFQ3hIo9SvSFt4sasQwiYDT7wNrjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDED5H8oQbAhMpmfPQAAAABJRU5ErkJggg==" /></g><path d="m81.58,57.61c-.31.14-.61.28-.9.43-2,1.08-3.35,3.13-3.96,5.32s-.54,4.51-.26,6.77c.66,5.19,2.51,10.21,5.32,14.62-6.68-4.63-12.22-11.01-15.25-18.54-3.18-7.91-3.4-16.77.04-24.57,1.87-4.06,5.98-6.87,10.74-6.87,6.53,0,11.82,5.29,11.82,11.82,0,5.02-3.13,9.31-7.55,11.03" /></g></svg>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Impedit facilis, sunt ullam maiores dolorem soluta similique
                        ab distinctio in repellendus animi ipsam dolores exercitationem
                        amet. Unde rerum nesciunt expedita deleniti sed impedit officia,
                        cupiditate voluptatum quam explicabo enim quia distinctio repudiandae!
                        Molestias cupiditate praesentium natus cumque dolor? Quas,
                        exercitationem porro?
                    </p>
                    <p className="author">- Evane Pacot</p>
                </div>
            </div>
            <div className="overlap-grid">
                <div className="top container">
                    <div className="content-container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est eligendi doloribus recusandae perferendis! Aspernatur
                            voluptatum recusandae voluptatem consequuntur, impedit
                            veritatis quia animi. Soluta, corporis dolorem voluptatem
                            cum obcaecati ea cumque rerum error sint porro, molestiae
                            dolor quas, nesciunt libero animi ab quia dicta temporibus
                            ut atque id voluptate. Corrupti iure iste quas a pariatur
                            non ipsa provident tempora, hic voluptates.
                        </p>
                    </div>
                    <div className="img-container">
                        <img src={Overlap1} alt="overlap-1" />
                    </div>
                </div>
                <div className="bottom container">
                    <div className="img-container">
                        <img src={Overlap2} alt="overlap-1" />
                    </div>
                    <div className="content-container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Est eligendi doloribus recusandae perferendis! Aspernatur
                            voluptatum recusandae voluptatem consequuntur, impedit
                            veritatis quia animi. Soluta, corporis dolorem voluptatem
                            cum obcaecati ea cumque rerum error sint porro, molestiae
                            dolor quas, nesciunt libero animi ab quia dicta temporibus
                            ut atque id voluptate. Corrupti iure iste quas a pariatur
                            non ipsa provident tempora, hic voluptates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About