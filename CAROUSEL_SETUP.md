# 🎠 Image Carousel Setup Guide

## How to Add Your Own Images

### Step 1: Add Your Images
1. Copy your images to `src/assets/` folder
2. Name them descriptively (e.g., `medical-lab-1.jpg`, `research-center.jpg`)

### Step 2: Update the Carousel Component
Open `src/components/ImageCarousel.tsx` and update the `images` array:

```typescript
const images: CarouselImage[] = [
  {
    id: 1,
    src: "/src/assets/your-image-1.jpg", // Replace with your image
    alt: "Description of your image",
    title: "Your Title Here",
    description: "Your description here",
    specs: ["Spec 1", "Spec 2", "Spec 3", "Spec 4"]
  },
  {
    id: 2,
    src: "/src/assets/your-image-2.jpg", // Replace with your image
    alt: "Description of your image",
    title: "Your Title Here",
    description: "Your description here",
    specs: ["Spec 1", "Spec 2", "Spec 3", "Spec 4"]
  },
  // Add more images as needed...
];
```

### Step 3: Customize Content
- **Title**: Main headline for each slide
- **Description**: Detailed description of the image/content
- **Specs**: Array of key features/specifications (max 4 recommended)

## Features Included

✅ **Auto-play**: Images change every 5 seconds automatically
✅ **Manual Controls**: Previous/Next buttons and play/pause
✅ **Hover Pause**: Auto-play pauses when hovering over carousel
✅ **Smooth Transitions**: Professional fade and scale effects
✅ **Progress Bar**: Visual indicator of current position
✅ **Slide Indicators**: Clickable dots to jump to specific slides
✅ **Responsive Design**: Works on all screen sizes
✅ **Professional Styling**: Medical theme with gradients and effects

## Customization Options

### Change Auto-play Speed
```typescript
// In the useEffect, change 5000 to your desired milliseconds
setInterval(() => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
}, 3000); // 3 seconds instead of 5
```

### Adjust Transition Duration
```typescript
// Change duration-1000 to duration-500 for faster transitions
className={`absolute inset-0 transition-all duration-500 ease-in-out`}
```

### Modify Carousel Height
```typescript
// Change h-[80vh] to h-[70vh] for shorter carousel
className="relative w-full h-[70vh] min-h-[500px] overflow-hidden"
```

## Tips for Best Results

1. **Image Quality**: Use high-resolution images (1920x1080 or higher)
2. **Aspect Ratio**: Maintain consistent aspect ratios for smooth transitions
3. **File Size**: Optimize images for web (under 500KB each)
4. **Content Length**: Keep titles under 60 characters, descriptions under 200 characters
5. **Specs**: Use 2-4 specifications per slide for best visual balance

## Troubleshooting

- **Images not loading**: Check file paths and ensure images are in `src/assets/`
- **Slow transitions**: Reduce image file sizes or transition duration
- **Layout issues**: Ensure images have proper aspect ratios
- **Auto-play not working**: Check if `isPlaying` state is properly managed

Happy customizing! 🚀
