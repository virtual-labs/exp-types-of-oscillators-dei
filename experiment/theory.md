Simple harmonic oscillators exhibit periodic motion with constant amplitude, while damped and forced types introduce energy loss or external driving forces.

---

### Simple Harmonic Motion

Simple harmonic motion (SHM) is a type of oscillating motion. A pendulum or an object hanging from a spring will oscillate harmonically when there is a small deviation from its equilibrium or rest state. A restoring force proportionate to x is created when slight displacement x occurs from the equilibrium position. This force always acts in the opposite direction of the displacement, towards the equilibrium position.

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>F</em> = &minus;<em>kx</em> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (1)
</div>

where k is the spring constant (force constant).

This motion is used to model many physical systems in the real world where a mass oscillates about an equilibrium position.

---

#### Simple Pendulum

A simple pendulum consists of a point mass (bob) suspended from a fixed support by a light, inextensible string of length L, free to oscillate in a vertical plane.

#### Mass Attached to a Spring

A mass attached to a spring fixed to a rigid wall executes SHM when displaced from equilibrium.

#### Oscillations of a Liquid Column in a U-Tube

The motion of an oscillating liquid column in a U-tube is SHM with time period:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>T</em> = 2&pi; &radic;<span style="text-decoration:overline; padding:0 3px;"><em>h</em>&thinsp;/&thinsp;<em>g</em></span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (2)
</div>

where h is the height of the liquid column in one arm at the equilibrium position of the liquid and g is the acceleration due to gravity.

Therefore, the time period T is independent of the density of the liquid.

#### LC Oscillator

Another example is that of an LC electrical circuit — an inductance L connected across a capacitance C carrying charge q performs electrical oscillations analogous to SHM.

---

The general governing equation for simple harmonic motion is:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>m</em>&#x1E8D; + <em>b</em>&#x1E8B; + <em>kx</em> = <em>F</em><sub>0</sub> sin(<em>&omega;t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (3)
</div>

where:

- **m** : Mass of the ball (kg)
- **F₀** : Applied force (N)
- **b** : Damping factor (Ns/m)
- **k** : Spring constant (N/m)
- **ω** : Angular frequency (rad/s)
- **t** : Time (s)
- **ϕ** : Phase angle

---

### Free Oscillators

Free oscillations, such as the swinging motion of a pendulum or the vibration of an elastic rod, occur when the motion is sustained by gravitational or elastic restoring forces. Undamped free vibration is the simplest form of vibrating motion.

**Example:** Simple pendulum oscillations, short-range tuning fork sound, sounds of musical instruments (e.g., organ pipes), etc. are a few instances of free oscillations.

#### Nature of Free Oscillators

In free oscillations, the amplitude and frequency of a freely vibrating body remain constant. During this motion, the system neither gains nor loses energy.

In this type of motion, both the damping factor (b) and the forcing frequency (F₀) are equal to zero.

Thus, equation (3) becomes:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>m</em>&#x1E8D; + <em>kx</em> = 0
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (4)
</div>

where the solution of the equation is:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>x</em>(<em>t</em>) = <em>A</em> cos(<em>&omega;</em><sub>0</sub><em>t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (5)
</div>

which represents simple harmonic motion. Here &omega;<sub>0</sub> is the natural angular frequency of the system:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>&omega;</em><sub>0</sub> = &radic;<span style="text-decoration:overline; padding:0 3px;"><em>k</em>&thinsp;/&thinsp;<em>m</em></span>
</div>

---

### Damped Oscillators

When a moving particle interacts with resistive forces like air or friction, it gradually loses kinetic energy in damped oscillations. A particle's displacement gradually decreases over time and eventually reaches its state of rest as a result of the resistance provided by external forces.

**Example:** Shock Absorbers

If the damping force is proportional to the velocity v with a damping constant b, then:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>F</em><sub>damping</sub> = &minus;<em>bv</em>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (6)
</div>

The equation of motion (3) becomes:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>m</em>&#x1E8D; + <em>b</em>&#x1E8B; + <em>kx</em> = 0
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (7)
</div>

The solution of equation (7) is:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>x</em>(<em>t</em>) = <em>A</em> <em>e</em><sup>&minus;<em>&gamma;t</em></sup> cos(<em>&omega;t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (8)
</div>

where &gamma; = <em>b</em>&thinsp;/&thinsp;(2<em>m</em>), and:

- **b** : Damping factor (Ns/m)
- **m** : Mass of the ball (kg)

The amplitude is given by:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>A</em> =
  <span style="display:inline-block; vertical-align:middle; text-align:center; line-height:1.4;">
    <span style="display:block; border-bottom:1.5px solid; padding:0 6px 2px;"><em>F</em><sub>0</sub></span>
    <span style="display:block; padding:2px 6px 0;"><em>m</em> &radic;<span style="text-decoration:overline; padding:0 2px;">(&omega;<sup>2</sup> &minus; &omega;<sub>0</sub><sup>2</sup>)<sup>2</sup> + 4&gamma;<sup>2</sup>&omega;<sup>2</sup></span></span>
  </span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (9)
</div>

&omega;<sub>0</sub> is the natural angular frequency of the system and &omega; is the angular frequency of the damped oscillator:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>&omega;</em> = &radic;<span style="text-decoration:overline; padding:0 3px;"><em>k</em>&thinsp;/&thinsp;<em>m</em> &minus; <em>b</em><sup>2</sup>&thinsp;/&thinsp;(4<em>m</em><sup>2</sup>)</span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (10)
</div>

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>b</em><sup>2</sup> = 4<em>km</em>
</div>

---

Damping is of three types:

#### 1. Under Damping

When damping is small, the system vibrates at first approximately as if there were no damping, but the amplitude of the oscillations decreases exponentially.

**Example:** A swinging pendulum decreasing in amplitude until it comes to a stop.

**Under damped condition:** b &lt; 2&radic;<span style="text-decoration:overline;">2</span>

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>x</em>(<em>t</em>) = <em>A</em> <em>e</em><sup>&minus;<em>&gamma;t</em></sup> cos(<em>&omega;t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (11)
</div>

where &gamma; = <em>b</em>&thinsp;/&thinsp;(2<em>m</em>), b = Damping factor, m = Mass of the ball (kg).

The amplitude is given by:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>A</em> =
  <span style="display:inline-block; vertical-align:middle; text-align:center; line-height:1.4;">
    <span style="display:block; border-bottom:1.5px solid; padding:0 6px 2px;"><em>F</em><sub>0</sub></span>
    <span style="display:block; padding:2px 6px 0;"><em>m</em> &radic;<span style="text-decoration:overline; padding:0 2px;">(&omega;<sup>2</sup> &minus; &omega;<sub>0</sub><sup>2</sup>)<sup>2</sup> + 4&gamma;<sup>2</sup>&omega;<sup>2</sup></span></span>
  </span>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (12)
</div>

---

#### 2. Critical Damping

When a critically damped oscillator is displaced from the equilibrium, it returns to its equilibrium position in the shortest possible time without oscillating. Critical damping occurs when the position of the mass asymptotically approaches zero. Depending on the initial velocity, the system either moves monotonically towards zero or reaches a maximum displacement before reversing direction and returning to equilibrium.

**Example:** Car suspension systems prevent the car from oscillating after travelling over a bump in the road.

**Critically damped condition:** b = 2&radic;<span style="text-decoration:overline;">2</span> (or ≈ 2.8)

---

#### 3. Over Damping

When a heavily damped oscillator is displaced from the equilibrium, it takes a long time to return to its equilibrium position without oscillating. When damping is large, the system does not oscillate at all.

**Example:** Car suspension systems prevent the car from oscillating after travelling over a bump in the road.

**Over damped condition:** b > 2.8

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>x</em>(<em>t</em>) = <em>A</em> <em>e</em><sup>&minus;<em>&gamma;t</em></sup> cos(<em>&omega;t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (13)
</div>

where &gamma; = <em>b</em>&thinsp;/&thinsp;(2<em>m</em>)

---

### Forced Oscillators

Forced oscillations occur when an oscillating system is driven by a periodic external force.

**Example:** Applying a periodic force onto a swinging pendulum or turning off a radio.

The governing equation is:

<div style="text-align:center; margin:1.2em 0; font-family:'Times New Roman',serif; font-size:1.1em;">
  <em>m</em>&#x1E8D; + <em>b</em>&#x1E8B; + <em>kx</em> = <em>F</em><sub>0</sub> sin(<em>&omega;t</em> + <em>&phi;</em>)
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (14)
</div>

where:
- **ω** : Angular frequency for forced oscillations
- **F₀** : Applied force for the forced oscillator

---

### Resonance

If the forcing frequency is close to the natural frequency of the system and the system is lightly damped, huge vibration amplitudes may occur. This phenomenon is known as **resonance**.

Some examples are:

- Musical instruments (acoustic resonance).
- Most clocks keep time by mechanical resonance in a balance wheel, pendulum, or quartz crystal.
- Tidal resonance.
- Orbital resonance of some moons in the solar system.
- Resonance of the basilar membrane in the ear.
- Increasing the height of a child's swing by pushing it at each swing.
- A wineglass breaking when a loud sound is produced at its resonant frequency.

---

### Additional Information

Some of the other types of oscillators are:

#### Coupled Oscillators

Coupled oscillations occur when two or more oscillating systems are connected in such a way that energy can be exchanged between them. Coupled oscillators occur in nature, for example, in the Earth–Moon system, and in biological systems such as natural pacemakers in the heart.
