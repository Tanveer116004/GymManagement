"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <Carousel>
            <Carousel.Item>
                <Image src="/images/banner1-desktop.jpg"
                 width={1920} // Original width of the image
                 height={500} // Original height of the image
					 layout="responsive"
					 sizes="(max-width: 600px) 800px,
							(max-width: 1200px) 1280px,
							1920px"
					 className="d-block w-100"
					 alt="Gym Workout"/>
                <Carousel.Caption>
                    <h1>Transform Your Body</h1>
                    <p>Join us today and start your fitness journey.</p>
                    <a href="#" className="btn btn-warning btn-lg">Join Now</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
				<Image src="/images/banner1-desktop.jpg"
                 width={1920} // Original width of the image
                 height={500} // Original height of the image
					 layout="responsive"
					 sizes="(max-width: 600px) 800px,
							(max-width: 1200px) 1280px,
							1920px"
					 className="d-block w-100"
					 alt="Group Fitness"/>
                <Carousel.Caption>
                    <h1>Group Classes</h1>
                    <p>Fun and effective group workouts.</p>
                    <a href="#" className="btn btn-warning btn-lg">Book a Class</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
				<Image src="/images/banner1-desktop.jpg"
                 width={1920} // Original width of the image
                 height={500} // Original height of the image
					 layout="responsive"
					 sizes="(max-width: 600px) 800px,
							(max-width: 1200px) 1280px,
							1920px"
					 className="d-block w-100"
					 alt="Personal Training"/>
                <Carousel.Caption>
                    <h1>Personal Training</h1>
                    <p>Achieve your goals with expert guidance.</p>
                    <a href="#" className="btn btn-warning btn-lg">Book a Session</a>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
  );
}
