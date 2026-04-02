# Image Prompts — SSPS Website

> **Theme Palette**: Warm deep charcoal (#292524), burnished copper/gold (#B8860B), warm off-white (#FAFAF8), stone grays. All images should feel warm, grounded, and premium — think golden-hour desert light, dark crude oil textures, amber sunsets over rigs, dusty earth tones. **Avoid** bright blues, neon colors, or overly saturated stock-photo looks.

> **Style Direction**: Real-life professional photography. Warm color grading (slightly desaturated, amber/golden highlights, deep shadow tones). Cinematic feel. Shot in Oman or Middle Eastern desert landscapes where applicable.

---

## 1. HERO — Background Video / Poster

**File**: `src/components/Hero.tsx` · Line 74–77
**Format**: MP4 video (looping, muted) + fallback poster image
**Dimensions**: Full viewport (16:9 or 21:9 cinematic)
**Current**: `/hero-video.mp4` + placeholder poster

### Video Prompt
> Cinematic aerial drone footage of a drilling rig operating in the Omani desert at golden hour. Camera slowly orbits the rig as the sun sets behind it, casting long amber shadows across the sandy terrain. Warm golden light bathes the rig's steel structure. Crew members visible at ground level. Dust particles catch the light. The sky transitions from deep copper to warm charcoal at the top. Subtle heat haze near the ground. No harsh blues — the entire palette is warm earth tones, burnished gold, and deep shadow.

### Poster Fallback Prompt
> Wide-angle photograph of a tall drilling derrick silhouetted against a warm amber-gold sunset sky in the Omani desert. The foreground is dark sandy terrain with subtle tire tracks. The rig's steel lattice structure is sharp against the glowing sky. Color palette: deep charcoal (#292524) in the shadows, burnished copper/gold (#B8860B) in the sky highlights, warm stone gray in the mid-tones. Cinematic, moody, high contrast.

---

## 2. ABOUT SECTION — Company Overview

**File**: `src/components/About.tsx` · Line 82
**Aspect Ratio**: 3:4 (mobile) / 2:3 (desktop)
**Current**: Unsplash construction photo

### Prompt
> Professional photograph of an active oilfield site in Oman at late afternoon. A drilling rig stands tall in the middle ground with pipeline infrastructure running in the foreground. Two SSPS-style workers in orange and khaki PPE inspect equipment near the rig base. The Omani desert stretches behind — rocky, sun-bleached terrain with low scrub. Warm golden-hour light casts everything in amber tones. The sky is a gradient from warm copper near the horizon to a muted warm gray above. Dust motes visible in the air. The overall mood is industrious, competent, and warm. Portrait orientation. Colors: deep charcoal shadows, burnished gold highlights, warm sand mid-tones. No bright blues.

---

## 3. SERVICES SECTION — Card Images (5 cards)

**File**: `src/lib/services.ts` + `src/components/Services.tsx`
**Dimensions**: 720×480 (3:2 landscape)
**Usage**: Service overview cards on homepage, carousel, mobile stacks

### 3A. Drilling Services Card

> Close-up photograph of a drilling rig floor in operation. Roughnecks in hard hats and work gloves guiding drill pipe into the rotary table. Crude oil and mud visibly glistening on the equipment. Dramatic warm side-lighting — amber tungsten work lights against the dark desert night. Steel pipes have an oil-slicked, coppery sheen. Deep charcoal shadows dominate the background. The frame is tight and dynamic, conveying raw power and precision. Colors: dark crude oil blacks, burnished copper highlights on metal, warm amber from work lights.

### 3B. Equipment Trading Card

> Wide shot of a large industrial yard/warehouse at dawn. Rows of neatly organized drilling rig components — BOP stacks, mud pumps, drill pipe racks, top-drive units — arranged on concrete. Early morning golden light streams in from the left, casting long warm shadows. A forklift operates in the background. The warehouse has an open-sided structure with steel beams. Everything is clean and orderly. Colors: warm stone gray warehouse, burnished gold dawn light, dark charcoal steel components, sandy ground. Professional, supply-chain feel.

### 3C. Rig Maintenance Card

> Two technicians in coveralls and hard hats servicing the draw-works of a drilling rig. One holds a large torque wrench, the other inspects a bearing. Overhead warm industrial lighting illuminates the oily machinery. Grease and crude oil stain the equipment, giving it a rich dark patina. The background shows the rig's steel structure fading into warm shadow. Shot from a low angle looking up at the workers, conveying expertise and scale. Colors: deep charcoal machinery, amber work light, burnished copper highlights on oily metal surfaces. Gritty, authentic feel.

### 3D. Electrical & Instrumentation Card

> Photograph of high-voltage transmission towers and overhead power lines stretching across Omani desert terrain at sunset. The towers are silhouetted in dark charcoal against a gradient sky of burned orange, copper, and warm gray. The desert floor is a mix of rocky earth and sand in muted warm tones. A substation is visible in the distant background. The power lines catch the golden light, appearing as thin copper threads against the sky. Grand, infrastructure-scale composition. Colors: deep charcoal tower silhouettes, burnished copper sky, warm stone desert floor.

### 3E. Pipeline Construction Card

> Panoramic photograph of a pipeline construction crew laying large-diameter steel pipe in an open desert trench. A side-boom crane lowers a pipe section while welders and inspectors work along the line. The pipe has a dark protective coating that catches warm sunlight. The desert terrain is a palette of warm sand, stone, and dry earth. Late afternoon golden-hour light. The pipeline stretches into the distance, creating a strong perspective line. Colors: dark charcoal pipe coating, burnished gold sunlight on exposed steel ends, warm sand terrain, amber sky. High production value.

---

## 4. DRILLING SERVICES PAGE — Well Types (3 images)

**File**: `src/components/DrillingServices.tsx` · Lines 31–49
**Dimensions**: 640×480 (4:3 landscape)
**Usage**: Staggered editorial cards, alternating left/right

### 4A. Oil Well Drilling

> Dramatic photograph of a tall oil drilling derrick at work in the Omani desert. The kelly/top-drive is rotating, and drilling mud flows visible at the rig floor. The frame captures the full height of the rig from ground to crown block. Two roughnecks stand at the rig floor working. Shot at late golden hour — the rig's steel catches warm amber light while deep shadows fill the structure. A faint plume of dust/steam rises from the rig floor. Background: desert horizon with warm copper sky. Colors: dark crude oil stains on equipment, burnished gold sunlight, charcoal steel, sandy terrain.

### 4B. Water Well Drilling

> Photograph of a truck-mounted water bore rig operating in arid Omani terrain. The rig is compact and functional, positioned near a small concrete pad. Clear water flows from the borehole into a mudpit. The surrounding landscape is rocky and dry — typical Omani wadi terrain with sparse desert vegetation. Morning warm light gives everything a golden-stone quality. Workers monitor gauges on the rig control panel. Colors: warm sand and stone terrain, burnished copper morning light, off-white sky, deep charcoal rig machinery. Clean, essential, functional mood.

### 4C. Mining Well Drilling

> Photograph of a core-sampling drill rig positioned on rocky, mountainous terrain (similar to Oman's Al Hajar range). The drill head is actively boring into layered rock formations. Extracted core samples lie in wooden trays in the foreground, showing geological stratification. A geologist in PPE examines the cores. Late afternoon light with warm amber tones illuminating the exposed rock face. The terrain is rugged — exposed stone in warm grays, browns, and copper-tinted reds. Colors: rich earth tones, warm stone grays, burnished copper highlights on equipment, deep charcoal shadows in the rock crevices.

---

## 5. DRILLING SERVICES PAGE — Well Testing & Commissioning

**File**: `src/components/DrillingServices.tsx` · Line 490
**Aspect Ratio**: 4:5 (portrait)
**Dimensions**: 640×800

### Prompt
> Vertical portrait-oriented photograph of a well testing spread at an oil well site at dusk. In the foreground: a test separator, heater treater, and data acquisition cabin with instrument readouts glowing in warm amber. Flare stack burning with a controlled, photogenic golden-orange flame against the darkening sky. Two engineers in PPE review data on a clipboard near the equipment. The background transitions to deep warm charcoal. The equipment has a rugged, oil-stained patina. Overall mood: professional, controlled, competent. Colors: deep charcoal (#292524) backdrop, burnished copper-gold (#B8860B) from the flare and instrument lights, warm stone gray equipment.

---

## 6. EQUIPMENT TRADING PAGE — Product Catalog (3 images)

**File**: `src/components/EquipmentTrading.tsx` · Lines 49, 82, 115
**Dimensions**: 800×600 (4:3 landscape)
**Usage**: Large editorial images with text overlay

### 6A. Rig Components — Warehouse

> Well-lit photograph of a large organized industrial warehouse. BOP stacks, draw-works gearboxes, rotary tables, and top-drive assemblies displayed on heavy steel racks. Overhead warm industrial lighting. Workers with clipboards inspecting components. The floor is clean concrete. Machinery has a mix of fresh paint and industrial patina — dark charcoal steel with occasional yellow/copper safety markings. The composition is wide and orderly, conveying a well-managed supply chain. Colors: warm industrial white lighting, deep charcoal machinery, burnished copper/gold safety labels, stone gray concrete floor.

### 6B. Mud Pumps & Fluid Circulation

> Close-up industrial photograph of a triplex mud pump system. The pump is partially disassembled showing the fluid end, pistons, and liners. A technician adjusts a component. Warm overhead lighting illuminates the mechanical complexity. Hydraulic fluid and mud residue give surfaces a rich, dark oily sheen. Pipes and valves connect to a mud tank visible in the background. Colors: deep charcoal steel, dark crude-oil sheen on components, burnished copper highlights on brass fittings, warm amber work lighting. Technical, detailed, mechanical beauty.

### 6C. Drilling Accessories

> Overhead/angled photograph of neatly organized drilling accessories on a yard surface — drill pipe sections with premium threads, handling tools, slips, elevators, and stabilizers. The pipe threads catch warm light, revealing the precision machining. Workers with gloves handle the components. The setting is an open yard with warm morning or late afternoon light. Slight depth-of-field blur on background items. Colors: dark charcoal steel with metallic sheen, burnished copper highlights on threaded connections, warm sandy yard surface. Clean, supply-chain catalog feel.

---

## 7. RIG MAINTENANCE PAGE — Active Rig Support Hero

**File**: `src/components/RigMaintenance.tsx` · Line 158
**Dimensions**: 1600×800 (2:1 ultra-wide landscape)
**Usage**: Full-width immersive background with dark gradient overlay

### Prompt
> Cinematic wide-angle photograph of a maintenance crew servicing an active drilling rig at dusk in the Omani desert. Four technicians work around the rig floor — one on the catwalk, two at the draw-works, one climbing the derrick. Warm amber work lights illuminate them against the deepening twilight sky. The rig's steel structure is a complex lattice of dark charcoal metal. Tools and safety equipment visible. The desert horizon shows a fading copper-amber sunset. The overall image is moody, atmospheric, and professional — conveying 24/7 operations. Colors: deep charcoal (#292524) dominant in structure and shadows, burnished copper/gold (#B8860B) from work lights and sky, warm stone gray in the desert. NOTE: Left 60% of the image will have a dark gradient overlay for text, so ensure the most compelling visual detail is in the right 40%.

---

## 8. RIG MAINTENANCE PAGE — Component Overhaul Cards (4 images)

**File**: `src/components/RigMaintenance.tsx` · Lines 44–80
**Aspect Ratio**: 5:7 (tall portrait)
**Dimensions**: 400×560
**Usage**: Vertical product-catalog-style cards

### 8A. Mud Pumps

> Tightly framed portrait photograph of a mud pump in a workshop, partially disassembled for overhaul. The fluid end is removed, exposing the pistons and valve seats. A technician's gloved hands hold a caliper measuring a liner. Warm focused workshop lighting from above. The pump body is heavy dark steel with oil stains and industrial wear marks. Clean workbench surface. Colors: deep charcoal machinery, burnished copper highlights on brass valve seats, warm amber workshop light, stone gray workbench.

### 8B. Draw-Works

> Portrait photograph of a draw-works gearbox opened on a workshop floor. The internal gear train is exposed — large spur gears with machined teeth. A technician inspects the crankshaft bearing with a inspection light. The gearbox housing is massive dark steel. Overhead warm industrial lighting. Oil and grease give the internal components a rich dark sheen. Colors: deep charcoal steel housing, dark crude-oil sheen on gears, burnished copper/amber from the inspection light, warm gray workshop floor.

### 8C. Rotary Tables

> Portrait photograph of a rotary table assembly on a workshop stand. The master bushing is removed, showing the main bearing race. A technician examines the pin-drive mechanism. The table surface has characteristic wear patterns and crude oil staining. Warm workshop lighting highlights the precision machining. Colors: dark charcoal steel table body, burnished copper tint on machined surfaces catching light, warm amber overhead lighting, stone gray background.

### 8D. Engines & Auxiliary Power

> Portrait photograph of a large diesel engine (CAT/Cummins-style) on an engine stand during rebuild. The cylinder head is removed, exposing pistons and the block. A technician torques head bolts. Turbocharger sits on the workbench nearby. Everything has an industrial, large-scale feel. Warm workshop lighting. The engine block is dark cast iron with subtle oil patina. Colors: deep charcoal engine block, burnished copper highlights on brass fittings and exhaust manifold, warm amber work lights, clean concrete floor.

---

## 9. ELECTRICAL SERVICES PAGE — Overhead Lines & Substation (2 images)

**File**: `src/components/ElectricalServices.tsx` · Lines 161, 253
**Dimensions**: 800×600 (4:3 landscape)

### 9A. Overhead Power Line Construction

> Sweeping landscape photograph of high-voltage transmission towers and power lines under construction across Omani desert terrain. A crane erects a new lattice steel tower while workers in harnesses secure conductors on the adjacent completed tower. The terrain is rocky desert with sparse vegetation. Shot at golden hour — the towers and lines are dramatic silhouettes with warm copper-gold light catching the conductors. The sky is a gradient from burnished gold at the horizon to warm gray overhead. Panoramic, grand scale. Colors: deep charcoal tower steel, burnished copper sky and wire highlights, warm sand/stone desert, muted warm gray sky.

### 9B. Electrical Substation

> Photograph of a completed outdoor electrical substation in an arid environment. Transformer banks, circuit breakers, bus bars, and control building visible. The substation is enclosed by a security fence. Shot at late afternoon with warm directional light creating shadows across the equipment. The transformer fins catch golden light. The control building has a clean, modern design. Power lines exit the substation heading toward the horizon. Colors: warm stone gray concrete pad, deep charcoal transformer bodies, burnished copper bus bars and connections, amber sky, dry earth surroundings.

---

## 10. PIPELINE CONSTRUCTION PAGE — Hydrostatic Testing

**File**: `src/components/PipelineConstruction.tsx` · Line 175
**Dimensions**: 800×900 (almost square, slightly tall)
**Usage**: Editorial split with text

### Prompt
> Photograph of a pipeline hydrostatic testing operation in the Omani desert. A large-diameter coated steel pipeline stretches across the frame, with pressure gauges and test manifolds attached at a test head. Two QC inspectors in PPE check the pressure chart recorder. Water tanker trucks visible in the background. The pipeline's dark protective coating contrasts with the warm sandy terrain. Warm afternoon light. The recording instruments show analog dials with warm amber backlighting. Colors: deep charcoal pipeline coating, burnished copper/gold afternoon light on exposed metal, warm sand terrain, stone gray equipment. Professional, quality-control focused composition.

---

## 11. CTA BANNER — Desert Energy Landscape

**File**: `src/components/CTABanner.tsx` · Line 123
**Dimensions**: 800×600 (4:3 landscape)
**Usage**: Right-side decorative panel, partially hidden by gradient, opacity 0.6

### Prompt
> Atmospheric wide-angle photograph of an integrated energy landscape at sunset in the Omani desert. In the scene: a drilling rig derrick, pipeline running across the foreground, and transmission towers/power lines in the background — representing SSPS's three core service areas. The composition sweeps from left to right with depth. The sunset sky is rich burnished copper and warm amber, with the landscape in deep charcoal silhouette. It's an idealized, slightly romantic view of energy infrastructure in the desert. Atmospheric haze softens the background. Colors: deep charcoal (#292524) silhouettes, burnished copper/gold (#B8860B) sky dominant, warm earth tones. NOTE: This image will be displayed at 60% opacity with overlay effects — bold contrast and strong silhouettes will reproduce best.

---

## 12. SERVICE HERO BACKGROUNDS (5 pages)

**File**: `src/components/ServiceHero.tsx`
**Usage**: Each service detail page has a ServiceHero at the top. Currently uses icon-based design, but if background images are added later:

### 12A. Drilling Service Hero Background
> Aerial photograph looking down at a drilling rig surrounded by desert terrain. The rig's rotary table is center-frame, with the derrick creating a dramatic shadow. Warm golden-hour light from the side. Crew vehicles parked nearby. Colors: warm sand terrain, dark charcoal rig shadow, burnished copper sunlight.

### 12B. Equipment Trading Hero Background
> Overhead drone shot of an equipment yard — rows of rig components, pipe racks, and heavy machinery arranged geometrically on concrete. Early morning warm light. Clean, organized, industrial. Colors: stone gray concrete, dark charcoal steel, warm golden morning light.

### 12C. Rig Maintenance Hero Background
> Close-up of a technician's hands working on a large bearing assembly with precision tools. Shallow depth of field. Warm workshop lighting. Oil-stained gloves gripping a torque wrench. Colors: deep charcoal steel, warm amber light, burnished copper tool highlights.

### 12D. Electrical Hero Background
> Upward-angled shot of a high-voltage transmission tower against a warm sunset sky. The steel lattice creates a geometric pattern. Power lines radiate outward. Colors: charcoal steel silhouette, burnished copper/gold sky.

### 12E. Pipeline Hero Background
> Low-angle photograph along a newly welded pipeline in a desert trench, stretching to a vanishing point on the horizon. The pipe's steel surface reflects warm sunset light. Colors: dark charcoal pipe, burnished gold reflections, warm sand trench walls.

---

## Quick Reference — File Names & Recommended Sizes

| # | Image | Component | Recommended Size | Format |
|---|-------|-----------|-----------------|--------|
| 1 | Hero video | Hero.tsx | 1920×1080 (or 4K) | MP4 (H.264) |
| 2 | Hero poster | Hero.tsx | 1920×1080 | JPG/WebP |
| 3 | About overview | About.tsx | 1200×1800 (2:3) | JPG/WebP |
| 4 | Card: Drilling | services.ts | 720×480 | JPG/WebP |
| 5 | Card: Equipment | services.ts | 720×480 | JPG/WebP |
| 6 | Card: Maintenance | services.ts | 720×480 | JPG/WebP |
| 7 | Card: Electrical | services.ts | 720×480 | JPG/WebP |
| 8 | Card: Pipeline | services.ts | 720×480 | JPG/WebP |
| 9 | Oil well drilling | DrillingServices.tsx | 1280×960 | JPG/WebP |
| 10 | Water well drilling | DrillingServices.tsx | 1280×960 | JPG/WebP |
| 11 | Mining well drilling | DrillingServices.tsx | 1280×960 | JPG/WebP |
| 12 | Well testing | DrillingServices.tsx | 800×1000 (4:5) | JPG/WebP |
| 13 | Rig components warehouse | EquipmentTrading.tsx | 1200×900 | JPG/WebP |
| 14 | Mud pumps & fluid systems | EquipmentTrading.tsx | 1200×900 | JPG/WebP |
| 15 | Drilling accessories | EquipmentTrading.tsx | 1200×900 | JPG/WebP |
| 16 | Maintenance hero BG | RigMaintenance.tsx | 2400×1200 (2:1) | JPG/WebP |
| 17 | Mud pump overhaul | RigMaintenance.tsx | 600×840 (5:7) | JPG/WebP |
| 18 | Draw-works overhaul | RigMaintenance.tsx | 600×840 (5:7) | JPG/WebP |
| 19 | Rotary table overhaul | RigMaintenance.tsx | 600×840 (5:7) | JPG/WebP |
| 20 | Engine rebuild | RigMaintenance.tsx | 600×840 (5:7) | JPG/WebP |
| 21 | Overhead power lines | ElectricalServices.tsx | 1200×900 | JPG/WebP |
| 22 | Electrical substation | ElectricalServices.tsx | 1200×900 | JPG/WebP |
| 23 | Pipeline hydrostatic test | PipelineConstruction.tsx | 1000×1125 | JPG/WebP |
| 24 | CTA desert landscape | CTABanner.tsx | 1200×900 | JPG/WebP |
| 25–29 | Service hero BGs (×5) | ServiceHero.tsx | 1920×800 | JPG/WebP |

---

## Color & Mood Cheat Sheet

| Element | Hex | Usage in Photos |
|---------|-----|-----------------|
| Deep charcoal | `#292524` | Shadows, steel structures, machinery, night sky |
| Burnished copper/gold | `#B8860B` | Sunset highlights, warm light sources, flare glow, sky |
| Warm off-white | `#FAFAF8` | Dust in air, light sand, sky haze near horizon |
| Stone gray | `#78716C` | Equipment surfaces, concrete, overcast mid-tones |
| Crude oil black | `#1C1917` | Oil stains, deep shadow areas, pipe coating |
| Warm sand | `#D4A017` | Desert terrain, earth, dusty surfaces in golden light |

**Overall mood**: Warm, professional, premium. Think National Geographic meets industrial documentary. Golden-hour desert photography with rich contrast and deep shadow detail. No neon, no bright blue, no overly clean stock-photo aesthetic.
