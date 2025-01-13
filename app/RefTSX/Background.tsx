import Image from 'next/image';
import landscape1 from '../../public/backgrounds/landscape1.jpg';
import landscape2 from '../../public/backgrounds/landscape2.jpg';

interface BackgroundProps {
    className?: string;
}

export default function Background({ className }: BackgroundProps) {
    // Create an array of images
    const images = [landscape1, landscape2];

    // Select a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full -z-10 overflow-hidden ${className}`}
        >
            <Image
                alt="A Landscape"
                src={randomImage} // Use the randomly selected image
                placeholder="blur"
                quality={100}
                layout="fill" // Use layout="fill" to cover the entire div
                objectFit="cover" // Ensure the image covers the div
                style={{
                    filter: 'blur(10px)', // Apply the blur effect here
                }}
            />
        </div>
    );
}
