# NeuralNetworkAccent Component

A modular, reusable neural network animation component that can be used as decorative elements across different sections of your application.

## Features

- **Modular Design**: Easy to configure size, position, and appearance
- **Performance Optimized**: Adjusts node count and complexity based on device capabilities
- **Responsive**: Automatically adapts to different screen sizes
- **Customizable**: Full control over colors, opacity, and animation parameters

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | `''` | Additional CSS classes |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Size of the accent element |
| `position` | 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'center' | 'top-right' | Position within the container |
| `opacity` | number | 0.6 | Overall opacity of the animation |
| `nodeCount` | number | 30 | Number of nodes in the animation |
| `maxConnectionDist` | number | 100 | Maximum distance for node connections |
| `color` | string | 'rgba(0, 229, 255, 0.8)' | Color of the nodes and connections |

## Usage Examples

### Basic Usage
```tsx
import NeuralNetworkAccent from '@/components/ui/neural-network-accent';

<NeuralNetworkAccent />
```

### Customized Accent
```tsx
<NeuralNetworkAccent 
  size="large" 
  position="top-left" 
  opacity={0.4}
  nodeCount={40}
  maxConnectionDist={120}
  color="rgba(255, 100, 200, 0.6)"
/>
```

### Multiple Accents in a Section
```tsx
<section className={styles.mySection}>
  <NeuralNetworkAccent 
    size="small" 
    position="top-left" 
    opacity={0.3}
    nodeCount={20}
  />
  <NeuralNetworkAccent 
    size="medium" 
    position="bottom-right" 
    opacity={0.2}
    nodeCount={25}
  />
  {/* Your content here */}
</section>
```

## Size Variations

- **Small**: 200x150px (mobile: 150x120px)
- **Medium**: 300x200px (mobile: 250x150px)  
- **Large**: 400x300px (mobile: 300x200px)

## Performance Considerations

- Automatically reduces node count on mobile devices
- Respects `prefers-reduced-motion` for accessibility
- Optimized canvas rendering with efficient connection drawing
- Mouse interaction is optional and can be disabled

## Integration with Existing Sections

The component is designed to work seamlessly with your existing sections:

1. **Hero Section**: Keep using `NeuralNetworkBackground` for full background
2. **Other Sections**: Use `NeuralNetworkAccent` for decorative elements
3. **Layering**: Accents automatically position behind content with proper z-index

## Best Practices

1. Use lower opacity values (0.1-0.4) for subtle background accents
2. Vary node counts and sizes to create visual hierarchy
3. Position accents in corners or edges to avoid interfering with content
4. Test on mobile devices to ensure performance is acceptable
5. Consider using fewer accents on content-heavy sections
