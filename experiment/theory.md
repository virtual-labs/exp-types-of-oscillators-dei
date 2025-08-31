<p> 
<h3>Simple Harmonic Motion</h3><br>
<p>Simple harmonic motion (SHM) is a type of oscillating motion. When there is a slight disturbance from their equilibrium or rest position, it will oscillate with harmonically This is the most fundamental vibration of a single particle or one-dimensional system. A small displacement x from its equilibrium position sets up a restoring force That is proportional to x acting in a direction towards the equilibrium position.</p></p>
<p>
F = -kx<br></p>
<p>
It is used to model many situations in real life where a mass oscillates about an equilibrium point.
<ol class="examples">
<li>Simple Pendulum</li>
<p> It is a simple pendulum, a mass m swinging at the end of a light rigid rod of length 'l'.</p>
<!-- <img src="{{url_for('static', filename='img/simple.gif')}}" alt="pendulum" width="300px" height="200px"> -->
<li>Mass attached to the spring</li>
<p>A mass fixed to a wall via a spring of stiffness s sliding to and fro in the `x` direction on a frictionless plane.</p>
<!-- <img src="{{url_for('static', filename='img/spring mass system.gif')}}" alt="spring mass" width="100px" height="200px"> -->
<br>
<!-- <img src="{{url_for('static', filename='img/mass spring system2.gif')}}" alt="spring mass" width="300px" height="200px" ><br> -->
<li>U-Tube example using SHM motion</li>
<p>
The Motion of an oscillating liquid column in a U tube is SHM with period T = 2πgh, where h is the height of the liquid column in one arm of U tube in equilibrium position of the liquid.</p>
<p>Therefore, T is independent of the density of liquid.</p>
<li>LC Oscillator</li>
<p>It is an electrical circuit, an inductance L connected across a capacitance C carrying a charge q.</p>
</ol>
<p>The governing equation for the motion is:</p> 
<img src="images/eq1.png" alt="equation" width="400px"> 
<ul style="None">
<li>m: mass of the ball in kg, m = 1 kg </li><br>
<li>b: damping factor in (Ns/m)</li><br>
<li>k : spring constant in N/m</li><br>
<li>F<sub>o</sub>: Force in Newton (N)</li><br>
<li>ω: driven frequency in rad/sec</li><br>
<li>t: time period</li><br>
<li>φ: phase angle</li><br>
</ul>
</p>
</p>
<h2><u>Free Oscillators</u> </h2>
<ul type="None">
<li><p>Free oscillations occur when the motion is maintained by gravitational or elastic restoring forces, such as the swinging motion of a pendulum or the vibration of an elastic rod. The simplest type of vibrating motion is undamped free vibration.</p></li>
<br>
<li><p> Some examples of free oscillations are oscillations of simple pendulums, oscillations of objects connected to a horizontal spring, sound produced by tuning forks in short distances, notes of musical instruments, organ pipes, etc.</p> </li>
<p><strong>Example:</strong>  Horizontal spring mass system, tuning fork</p>	
<li><p><u><strong>Nature of free oscillations</strong></u> <br>
Amplitude and frequency of a freely vibrating body remain constant. They do not lose or gain any energy in the process. Free vibrations for sound can occur only in a vacuum. Such vibrations are ideal conditions of oscillations. It is not possible to practically realize free oscillations.</p></li>
<li><p> In this type of motion F<sub>o</sub>, b (damping factor) = 0<br> So the equation(1) is :<br>
<img src="images/eq2.png" width=400px alt="equation" ><br>
<p> where, </p>
<li><p >•	The solution of the equation is: Acos(ωt+φ) <br>which represents simple harmonic motion </p></li>
<li><p><strong><div class="cmath" ><p>ω<sub>o</sub> is the natural frequency of the system:
<br>
<img src="images/eq6.png" alt="equation" width=50px></p>
</div></p> </li></strong>
</ul>
<br> </p>
<h2><u>Damped Oscillators</u> </h2>
<ul type="None">
<li><p>A damped oscillation is one in which the moving particle gradually loses its kinetic energy on interaction with resistive forces like air or friction. Due to this resistance offered by external forces, the displacement of a particle slowly reduces with time and ultimately reaches its state of rest. </li></p>
</li>
<li><p><strong>Example:</strong>A simple pendulum oscillating under natural conditions. Shock absorbers in vehicles are an example of damping devices that reduce the vehicle’s vibrations.</p></li>
<p> Shock Absorbers</p>	
<p>If the damping force F<sub>o</sub> ,is proportional to the velocity v<sub>o</sub>, with a damping constant b, then<br>
<p style = "padding:10px; border: 2px solid red; margin-right:700px; text-align: center;">F<sub>o</sub> = -b𝑣<sub>o</sub></p>The equation of motion (1) becomes:</p>
<p>
<img src="images/fourth.png" alt="shock absorbers" width=400px ></p>
									
<p><img src="images/eq7.png" alt="shock absorbers" width=400px ></p>
<p><img src="images/eq3.png" alt="shock absorbers" width=400px ></p>
<p> ω<sub>o</sub> is natural frequency of the damped system and  ω<sup>'</sup> is the frequency of the damped oscillator.<br>
<p><img src="images/eq8.png" alt="shock absorbers" width=400px ></p>
</p>
<p> b<sup>2</sup> = 4km <br>
b =  2√2							
</p>
<p>Under certain conditions damping is of three types:-</p>
<strong><u><p>1.Under Damping</p></u></strong>
<p>When damping is small, the system vibrates at first approximately as if there were no damping, but the amplitude of the solutions decreases exponentially.<br>
<strong>Example :</strong> a swinging pendulum decreasing in amplitude until it comes to a stop.<br>
<p><u>Under damped oscillations:</u> b < 2√2</p>  <br>
<p><img src="images/eq99.png" alt="shock absorbers" width="400px"></p>  				<p>b: damping factor ,<br>
m : mass of the ball in kg.<br>
and amplitude is given by:-</p>
<p><img src="images/eq3.png" alt="shock absorbers" width="400px"></p>  
<strong><u><p>2.Critical Damping</p></u></strong>
<p>When a critically damped oscillator is displaced from the equilibrium, it will return to rest at its equilibrium position in the shortest possible time without oscillating. Critical damping occurs when the position of the mass will asymptotically approach 0. Depending on the initial velocity, it will either go monotonically to zero or reach some maximum displacement before it turns around and goes to 0.<br><br>
<strong>Example: </strong>car suspension systems prevent the car from oscillating after travelling over a bump in the road.<br><u><p>Critically damped oscillations:</u> b = 2.8  </p><br>
<!-- <p><img src="image/eq77.png" alt="shock absorbers" width="400px"></p>   -->
<strong><u><p>3.Over Damping</p></u></strong>
<p>When a heavily damped oscillator is displaced from the equilibrium, it will take a long time to return to its equilibrium position without oscillating. When damping is that large, the system does not oscillate at all.<br>
<strong>Example:</strong>car suspension systems prevent the car from oscillating after travelling over a bump in the road<br>
<u><p>Over damped oscillations:</u> b > 2.8 </p>
<p><img src="images/eq66.png" alt="shock absorbers" width="400px"></p>  
</ul>
<h2><u>Forced Oscillators</u> </h2>
<ul type="None">
<li><p>Forced oscillations occur when an oscillating system is driven by a periodic force that is external to the oscillating system.</p></li>
<li><p><strong><u>Example:-</u></strong>Applying force for movement of a pendulum turning of a radio </p><br>
</li>
<p>The equation is:<br></p>
<li><p><img src="images/eq12.png" alt="shock absorbers" width="400px"></p></li>
<li><p>here <br>ω: driven frequency for forced oscillations.<br> F<sub>o</sub>:force for the forced oscillator</p></li>
<li><u><strong><p>Resonance</p></strong></u> 
<p>If the forcing frequency is close to the natural frequency of the system, and the system is lightly damped, huge vibration amplitudes may occur. This phenomenon is known as resonance. </p></li></li>
<li> 
<p>
1. musical instruments (acoustic resonance).<br> 
2. Most clocks keep time by mechanical resonance in a balance wheel, pendulum, or quartz crystal.<br>
3. Tidal resonance of the Bay of Fundy.<br>   
4. Orbital resonance as in some moons of the solar system's gas giants.  <br>  
5. The resonance of the basilar membrane in the ear.<br>
6. Making a child's swing higher by pushing it at each swing.  <br>  
7. A wineglass breaking when someone sings a loud note at exactly the right pitch.</p><br>
</li>
<center> <h3> <u><p>Additional Information:</p></u></h3></center>
<li> <p>There are some other types of oscillations, such as:</p></li>
<center>
<h3> <u><strong><p> Coupled Oscillators</p></strong></u> </h3> </center>
<p>Coupled oscillations occur when two or more oscillating systems are connected in such a manner as to allow motion energy to be exchanged between them. Coupled oscillators occur in nature (e.g., the moon and earth orbiting each other) or can be found in man-made devices (such as with the pacemaker).
