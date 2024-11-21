const questions = {
    Integration: [
        { question: "A unit of signaling speed equal to the number of signal events per second."
        , options: ["a. bit rate", "b. pulse rate", "c. baud rate", "d. Nyquist rate"]
        , correct: "c"},
        { question: "The maximum information transport rate (in bps) can be achieved with zero probability."
        , options: ["a. Information theory", "b. Channel capacity", "c. Bit error rate (BER)", "d. Probability of error bit"]
        , correct: "b"},
         { question: "An 8-bit level code is transmitted over a 2400 Hz bandwidth, calculate the required channel capacity."
        , options: ["a. 19,200 bps", "b. 36,700 bps", "c. 38,400 bps", "d. 43,350 bps"]
        , correct: "c"},
        { question: "Calculate the channel capacity needed for voice grade channel having a signal power of 90 W and a noise power of 5 W."
        , options: ["a. 9,453 bps", "b. 13,169 bps", "c. 22,390 bps", "d. 40,467 bps"]
        , correct: "b"},
         { question: "Calculate the amount of information needed to open a lock whose combination consist of three integers, each ranging from 00 to 99."
        , options: ["a. 6.64 bits", "b. 19.9 bits", "c. 37.3 bits", "d. 51 bits"]
        , correct: "b"},
        { question: "The average amount of information in symbol refers to"
        , options: ["a. Information density", "b. Information theory", "c. Entropy", "d. Entropy rate"]
        , correct: "c"},
         { question: "It is essensitially an analog-to-digital conversion of a special type where the information contained in the instantaneous samples of an analog signal is represented by digital words in a serial bit stream."
        , options: ["a. PWM", "b. PPM", "c. PAM", "d. PCM"]
        , correct: "d"},
        { question: "The most commonly used type of circuit to produced a pulse amplitude modulated signal is"
        , options: ["a. A/D converter", "b. flash encoder", "c. sample and hold circuit", "d. anti-alias filter"]
        , correct: "c"},
        { question: "Three popular techniques in PCM are used to implement the analog-to-digital converter (ADC) encoding operation except:"
        , options: ["a. counting", "b. successive approximation", "c. formatting", "d. flash encoders"]
        , correct: "c"},
        { question: "For a PCM system with a maximum audio input frequency of 4 kHz, determine the minimum sample rate."
        , options: ["a. 4 kHz", "b. 8 kHz", "c. 16 kHz", "d. 32 kHz"]
        , correct: "b"},
         { question: "Assume uniform quantizing in PCM system, what is the S/N if there are 128 levels of quantization?"
        , options: ["a. 27.5 dB", "b. 43.9 dB", "c. 50.9 dB", "d. 73.7 dB"]
        , correct: "b"},
        { question: "What is the dynamic range in dB of an 8-bit linear sign magnitude PCM spectrum whose maximum decoded voltage in the receiver is 1.27 Vp"
        , options: ["a. 18 dB", "b. 42 dB", "c. 48 dB", "d. 55dB"]
        , correct: "b"},
         { question: "For a PCM system with the following parameters: Maximum analog input frequency = 4 kHz, Maximum decoded voltage at the receiver = ± 2.55 V, Minimum DR = 46 dB. Determine the actual DR."
        , options: ["a. 17 dB", "b. 42 dB", "c. 48 dB", "d. 54 dB"]
        , correct: "c"},
        { question: "Is the numerical indication ho how efficiently a PCM code is utilized"
        , options: ["a. Throughput", "b. Transmission rate of information bits", "c. coding efficiency", "d. gain"]
        , correct: "c"},
         { question: "The number of bits required to represent a character"
        , options: ["a. byte", "b. block", "c. control character", "d. code length"]
        , correct: "d"},
        { question: "Is an entropy encoding algorithm used for lossless data compression"
        , options: ["a. Shannon-Hartley Coding", "b. Huffman coding", "c. Hartley's Law", "d. Companding"]
        , correct: "b"},
        { question: "A type of analog companding technique used in U.S. and Japan."
        , options: ["a. A-Law", "b. µ-Law", "c. B-Law", "d. α-Law"]
        , correct: "b"},
        { question: "_____ uses a single bit PCM code to achieve digital transmission of analog signals."
        , options: ["a. Delta Modulation PCM", "b. Adaptive Delta PCM", "c. Differential PCM", "d. none of them"]
        , correct: "a"},
        { question: "The simplest and most common form of ASK operates as a switch, using the presence of a carrier wave to indicate a binary one and its absence ot indicate a binary zero, which refers to"
        , options: ["a. OFDM", "b. DPCM", "c. OOK", "d. QAM"]
        , correct: "c"},
        { question: ""
        , options: ["a. ", "b. ", "c. ", "d. "]
        , correct: ""},
        // Add more Math questions here
    ],

    Mathematics: [
        { question: "What is Ohm's Law?", options: ["a. V=IR", "b. E=mc^2", "c. F=ma", "d. P=IV"]
            , correct: "a" },
    ],

    Elecs: [
        { question: "Permeability is the inverse equivalent of which electrical term?"
        , options: ["a. Voltage", "b. Current", "c. Resistance", "d. Conductance"]
        , correct: "c"},
        { question: "Inserting a soft iron core into a coil has what effect on the inductance of the coil?"
        , options: ["a. Increase inductance", "b. Decrease inductance", "c. Does not affect the inductance", "d. None of these"]
        , correct: "a"},
        { question: "Why is AC current transfer more effective than DC current transfer over long distances?"
        , options: ["a. Due to the height of power lines", "b. Due to the use of AC generators", "c. Due to step-up and step-down transformers reducing 12R losses", "d. Due to very high voltages"]
        , correct: "c"},
        { question: "A short circuit has:"
        , options: ["a. Too much resistance", "b. No conductance", "c. No resistance", "d. Low current"]
        , correct: "c"},
        { question: "When considering conventional current versus electron current flow:"
        , options: ["a. Electron current flow came first", "b. Protons move in conventional current flow", "c. Conventional current flow came first", "d. The direction of current is the same in both methods"]
        , correct: "c"},
        { question: "In both induction and synchronous AC motrs"
        , options: ["a. The operating speed is very steady", "b. The stator magnetic field is stationary", "c. The stator magnetic field rotates", "d. The squirrel cage forms the rotor"]
        , correct: "c"},
        { question: "A magnet that is heated will"
        , options: ["a. Increase in magnetism", "b. Decrease in magnetism", "c. Not change its magnetism", "d. Become demagnetized"]
        , correct: "b"},
        { question: "Ferrites are made of what material?"
        , options: ["a. Ceramic", "b. Porcelain", "c. Silica", "d. Alloy"]
        , correct: "a"},
        { question: "The left-hand rule for solenoids states that"
        , options: ["a. If the fingers of the left hand encircle the coil in the same direction as electron flow the thumb points in the direction of the north pole", "b. If the thumb of the left hand points in the direction of current flow the fingers point forward the north pole", "c. If the fingers of the left hand encircle the coil in the same direction as electron flow the thumb points in the direction of the south pole", "d. If the thumb of the right hand points in the direction of electric flow, the fingers will point in the direction of the north pole "]
        , correct: "a"},
        { question: "Discharge of electrons from a body as the result of being bombarded by electrons emitted from a primary source"
        , options: ["a. Thermionic emission", "b. Primary emission", "c. Photoelectric emission", "d. Secondary emission"]
        , correct: "d"},
        { question: "Which electromagnetic device uses brushed and a commutator?"
        , options: ["a. A speaker", "b. A DC generator", "c. A relay", "d. A solenoid"]
        , correct: "b"},
        { question: "It is the air space between poles of magnet"
        , options: ["a. Air gap", "b. Vacuum", "c. Free zone", "d. Free space"]
        , correct: "a"},
        { question: "Power companies supply AC, not DC, because:"
        , options: ["a. It is easier to transmit AC", "b. There is no longer a need for DC", "c. DC is more dangerous", "d. There are not enough batteries"]
        , correct: "a"},
        { question: "A string of resistors in a series circuits will:"
        , options: ["a. Divide the source voltage in proportion to their values", "b. Reduce the power to zero", "c. Cause the current to divide", "d. Increase the source voltage in proportion to the values"]
        , correct: "a"},
        { question: "The term used to designate electrical pressure is:"
        , options: ["a. Voltage", "b. Current", "c. Resistance", "d. Conductance"]
        , correct: "a"},
        { question: "What is the name of the effect of some of the magnetic fields leaking off due to less than 100% coupling? "
        , options: ["a. Eddy currents", "b. Electromagnetic Effect", "c. Leakage reactance", "d. Self-inductance"]
        , correct: "c"},
        { question: "Where do magnetic lines go when they collapse back into a wire?"
        , options: ["a. Into the field which surrounds each atom", "b. Into free space", "c. Into core itself", "d. Into the coil itself"]
        , correct: "a"},
        { question: "Point out the WRONG statement Magnetic leakage is undesirable in electric machines because it"
        , options: ["a. Leads to their increased weight", "b. Increases to their cost of manufacture", "c. Produces fringing", "d. Lowers their power efficiency"]
        , correct: "d"},
        { question: "Unit of flux density in English System"
        , options: ["a. Tesla", "b. Gauss", "c. Lines per sq. inch", "d. Oersted"]
        , correct: "c"},
        { question: "What are the effects of moving a closed wire loop through a magnetic field? "
        , options: ["a. A voltage is induced in the wire", "b. A current is induced in the wire", "c. The polarity across the wire depends", "d. All of the above"]
        , correct: "d"},
        { question: "Permeability is the _____"
        , options: ["a. Power found in the electromagnet", "b. Power found in magnetic field", "c. Ease with which metals maybe magnetized or demagnetized", "d. Power found in the transformer"]
        , correct: "c"},
        { question: "Half-splitting is"
        , options: ["a. A means for nuclear fuel cells to produce electricity", "b. A means of isolating a problem in a circuit", "c. A means for reducing a high AC voltage to a low DC voltage", "d. A means of limiting current in a circuit"]
        , correct: "b"},
        { question: "Given a series circuit containing resistors of different values, which statement is not true?"
        , options: ["a. The current through each resistro is the same", "b. The sum of the voltage drops across each resistive element will be equal", "c. The total resistance is the sum of the value resistors", "d. The voltage drop across each resistor is the same"]
        , correct: "d"},
        { question: "Current is considered as the movement of:"
        , options: ["a. Electrons", "b. Protons", "c. Charge", "d. Nuclei"]
        , correct: "a"},
        { question: ""
        , options: ["a. ", "b. ", "c. ", "d. "]
        , correct: ""},
        

        // Add more Elecs questions here
    ],
    GEAS: [
        { question: "What does CPU stand for?", options: ["a. Central Process Unit", "b. Central Processing Unit", "c. Computer Personal Unit", "d. Central Processor Unit"]
            , correct: "b" },
        // Add more GEAS questions here
    ],
    EST: [
        { question: "If the output of a circuit should be a representation of less than one-half of the input signal, what class of operation should be used", options: ["a. A", "b. C", "c. AC", "d. AB"], correct: "b" },
        { question: "In a frequency-domain plot, the vertical axis measures the:", options: ["a. peak amplitude", "b. frequency", "c. phase", "d. slope"], correct: "a"},
        { question: "Cosmic noise: ", options: ["a. a constant radiation from the sun", "b. RF noise radiated by distant stars", "c. a constant radiation from the sun and RF noise radiated by distant stars", "d. none of these"], correct: "b"},
        { question: "The Colpitts VFO uses: ", options: ["a. a tapped inductor", "b. a two-capacitor divider", "c. an RC time constant", "d. a piezoelectric crystal"], correct: "b"},
        { question: "If a periodic voltage waveform is symmetric about a line midway between the vertical axis and the negative horizontal axis and passing through the coordinate origin, it is said to have point, or skew, symmetry is called a/n: ", options: ["a. even function", "b. odd function", "c. half-wave symmetry", "d. full-wave symmetry"], correct: "b"},
        { question: "Which of the followinf is not a source of ecternal noise? ", options: ["a. thermal agitation", "b. auto ignitions", "c. the sun", "d. flourescent lights"], correct: "a"},
        { question: "Radiowave spectrum is from ______ to ________", options: ["a. ELF, EHF", "b. VF, EHF", "c. VLF, EHF", "d. VLF, Light Frequencies"], correct: "c"},
        { question: "Television broadcasting occurs in which ranges", options: ["a. HF", "b. EHF", "c. VHF", "d. UHF"], correct: "c"},
        { question: "A complete communication system must include: ", options: ["a. a transmitter and receiver", "b. a transmitter, a receiver, and a channel", "c. a transmitter, a receiver and a spectrum analyzer", "d. a multiplexer, a demultiplexer, and a channel"], correct: "b"},
        { question: "Indicate the false statement. Modulation is used to", options: ["a. reduce the bandwidth used", "b. separate differing transmissions", "c. ensure that intelligence may be transmitter over long distances", "d. allow the use of practicable antennas"], correct: "a"},
        { question: "A class B amplifier conducts for how many degrees of an input sine wave?", options: ["a. 90 deg to 150 deg", "b. 180 deg", "c. 180 deg to 360 deg", "d. 360 deg"], correct: "b"},
        { question: "Which of the followinf characterizes impulse noise?", options: ["a. it is characterize by low-amplitude peaks of long duration in the total noise spectrum", "b. produce when unwanted harmonics of a signal are prdouced through non-linear amplification", "c. it is the generation of unwanted sum and differnece frequencies when two or more signals are amplified by a non-linear device", "d. consist of sudden burst of irregularly shaped pulses"], correct: "d"},
        { question: "What electrical characteristic makes the frequecny stability of a crystal better than that of an LC tank circuit?", options: ["a. higher Q", "b. higher inductance", "c. higher resistance", "d. higher capacitance"], correct: "a"},
        { question: "If the maximum amplitude of a sine wave is 2 V, the minimum amplitude is ______ V.", options: ["a. 2", "b. 1", "c. -2", "d. between -2 and 2"], correct: "c"},
        { question: "Which of the following describess shot noise?", options: ["a. noise that is produced by a random motion of electrons in a conductor due to hear", "b. noise that is due to random variations in current flow in active devices sucha as tubes, transistors, semiconductor diodes, etc", "c. noise power that varies inversely with frequency", "d. any modification to a stream of carriers as they pass from input to output of a device produces an irregular, random variation"], correct: "b"},
        { question: "Electromagnetic waves produces primarily by heat are called: ", options: ["a. infrared rays", "b. microwaves", "c. shortwaves", "d. x-rays"], correct: "a"},
        { question: "Radians per seconds is equal to: ", options: ["a. 2pi *f", "b. f / 2pi", "c. the phase angle", "d. none of the above"], correct: "a"},
        { question: "What is a noise limiter?", options: ["a. suppressed low frequency noise components", "b. prevents externally generated noise from exceeding certain amplitude", "c. it is inserted in series with the a-c power cord of an electronic device", "d. any of these"], correct: "b"},
        { question: "The most efficient RF power amplifier is which class amplifier?", options: ["a. Class B", "b. Class A", "c. Class AB", "d. Class C"], correct: "d"},
        { question: "A signal is composed of a fundamental frequency of 2 kHz and another of 4 kHz. This 4 kHz signal is referred to as: ", options: ["a. a fundamental of the 2 kHz signal", "b. the DC component of the main signal", "c. a dialetric signal of the main signal", "d. a harmonic of the 2 kHz signal"], correct: "d"},
        { question: "If bandwidth is tripled, the signal power is: ", options: ["a. not changed", "b. quadrupled", "c. tripled", "d. doubled"], correct: "a"},
        { question: "Which of the following advantages does the Colpitts oscillator have over the Armstrong and Hartley oscillators?", options: ["a. easier to tune", "b. wider frequency range", "c. better frequency stability", "d. all of the above"], correct: "c"},
        { question: "A signal is measured at two different points. The power is P1 at the first point and P2 at the second point. The db is 0. This means: ", options: ["a. P2 is zero", "b. P2 equals P1", "c. P2 is much larger than P1", "d. P2 is much smaller than P1"], correct: "b"},
        { question: "What is correlated noise?", options: ["a. nois that is present regardless of whether there is signal present or not", "b. noise that cannot be present in the cirucit unless there is an input signal", "c. nois that affects the communication system coming from the outside environment", "d. noise which is generated internally or within the communication system or in the receiver"], correct: "b"},
        { question: "A micron is:", options: ["a. one-millionth of a foot", "b. one-millionth of a meter", "c. one-thousandth of a meter", "d. one ten-thousandth of an inch"], correct: "b"},
        { question: "Solar noise", options: ["a. a constant radiation from the sun", "b. RF noise radiated by distant stars", "c. a constant radiation from the sun and RF noise radiated by distant stars", "d. none of these"], correct: "a"},
        { question: "Continuous voice or video signals are referred to as being:", options: ["a. baseband", "b. analog", "c. digital", "d. continuous waves"], correct: "b"},
        { question: "The Clapp oscillator is:", options: ["a. a modified Harley oscillator", "b. a modified Colpitts oscillator", "c. a type of crystal-controlled oscillator", "d. only built with FETs"], correct: "b"},
        { question: "What is attenuation", options: ["a. the signal loses strength due to the resistance of the transmission medium", "b. the signal loses strength due to the different propagation speeds of each frequency that makes up the signal", "c. an outisde source such as crosstalk corrupts a signal", "d. any of these"], correct: "a"},
        { question: "Noise can be reduced by:", options: ["a. widening the bandwidth", "b. narrowing the bandwidth", "c. increasing temperature", "d. increasing transistor current levels"], correct: "b"},
        { question: "Why do we call signals in the range 20 hz to 20 000 Hz audio frequencies?", options: ["a. because the human ear cannot sense anything in this range", "b. because this range is too low for radio energ", "c. because the human ear can sense radio waves in this range", "d. because the human ear can sense sounds in this range"], correct: "d"},
        { question: "What class operation has the highest fidelity?", options: ["a. A", "b. C", "c. AB", "d. AC"], correct: "a"},
        { question: "In a time-domain plot, the vertical axis measure of:", options: ["a. amplitude", "b. frequency", "c. phase", "d. time"], correct: "a"},
        { question: "Which of the following describes transit-time noise?", options: ["a. noise that is produced by random motion of electrons in a conductor due to heat", "b. noise that is due to random variations in current flow in active devices such as tubes, transistors, semiconductor diodes, etc.", "c. noise power that varies inversely with frequency", "d. any modification to a stream of carriers as they pass from inout to output of a device produces an irregular, random variation"], correct: "d"},
        { question: "Crystal-Controlled oscillators are", options: ["a. used fro a precise frequency", "b. used for very low frequency drift (parts per million)", "c. made by grinding quartz to exact dimensions", "d. all of the above"], correct: "d"},
        { question: "In half duplex communications:", options: ["a. there is only one way of transmission", "b. only one of the two parties can transmit at a time", "c. both parties may transmit and receive simultaneously", "d. there is no half duplex communications"], correct: "b"},
        { question: "Noise at the input to a receiver can be as high as several:", options: ["a. microvolts", "b. millivolts", "c. volts", "d. kilovolts"], correct: "a"},
        { question: "Electrical energy at a frequency of 7125 kHz is in what frequency range?", options: ["a. radio", "b. audio", "c. hyper", "d. super-high"], correct: "a"},
        { question: "______ is mathematically equal to the logarithm to the base ten of the power ration P1 over P2", options: ["a. bel", "b. dB", "c. bel/10", "d. dB/2"], correct: "a"},
        { question: "Radio signals are made up of:", options: ["a. voltages and currents", "b. electric and magnetic fields", "c. electrons and protons", "d. noise and data"], correct: "b"},
        { question: "Which of the following is not an actual amount of power?", options: ["a. dB", "b. dBm", "c. dBw", "d. dBk"], correct: "a"},
        { question: "An ideal sinusoidal oscillator would produce which of the following outputs?", options: ["a. a square wave of constant frequency and amplitude", "b. a square wave of varying frequency and amplitude", "c. a sine wave of constant frequency and amplitude", "d. a sine wave of varying frequency and constant amplitude"], correct: "c"},
        { question: "A periodic signal can always be decomposed into:", options: ["a. exactly an odd number of sine waves", "b. a set of sine waves", "c. a set of since waves, one of which must have a phase of 0 degrees", "d. none of the above"], correct: "b"},
        { question: "The base band signal cannot usually be transmitted through space by radio because:", options: ["a. the antennas required are too short", "b. multiple base band signals transmitting simultaneously would interfere with one another", "c. the signal will be attenuated", "d. any of these"], correct: "b"},
        { question: "Noise is primarily:", options: ["a. high-frequency spikes", "b. low-frequency variations", "c. random level shifts", "d. random frequency variations"], correct: "a"},
        { question: "What happens to a signal's wavelength as its frequency increases?", options: ["a. it gets longer", "b. it stays the same", "c. it disappears", "d. it gets shorter"], correct: "d"},
        { question: "Which of the following describes transistor noise?", options: ["a. noise that is produced by random motion of electrons in a conductor due to heat", "b. noise that is due to random variations in current flow in active devices such as tubes, transistors, semiconductor diodes, etc.", "c. noise that occurs only in devices where single current separates into two or more paths", "d. any modification to a stream of carriers as they pass from input to output of a device produces an irregular, random variation"], correct: "c"},
        { question: "What three circuits are most commonly used as frequency determining devices?", options: ["a. class C amplifier, calss B amplifier, and class A amplifier", "b. crystal-controlled oscillator, RC oscillator, and LC oscillator", "c. common-emitter amplifier, common-base amplifier, and common-collector amplifier", "d. transformer coupler, RC coupler, and direct coupler"], correct: "b"},
        { question: "As frequency increase, the period:", options: ["a. decreases", "b. increases", "c. remains the same", "d. doubles"], correct: "a"},
        { question: "the following are the characteristics of industrial noise, except?", options: ["a. noise that is due to automobile and aircraft ignition, electric motors and swithcing equipment, leakage from high voltage lines, fluorescent lamps, etc.", "b. usually between 1-600 GHz", "c. usually most intense in industrial and densely populated areas", "d. also called man-made noise"], correct: "b"},
        { question: "Another name for signals in the HF range is:", options: ["a. microwaves", "b. RF waves", "c. shortwaves", "d. millimeter waves"], correct: "c"},
        { question: "Indicate the false statement. Fourier analysis shows that a sawtooth wave consist of:", options: ["a. fundamental and subharmonic sine waves", "b. a fundamental sine wave and an infinite number of harmonics", "c. fundamental and harmonic sine waves whose amplitude decreases with the harmonic number", "d. sinusoidal voltages, some of which are small enough to ignore in practice"], correct: "a"},
        { question: "The wavelength of a radio signal is:", options: ["a. equal to f/c", "b. equal to c/lambda", "c. the distance a wave travels in one period", "d. how far the signal can travel without distortion"], correct: "c"},
        { question: "Which of the following is not a source of noise?", options: ["a. another communication signal", "b. atmospheric effects", "c. manufactured electrical systems", "d. thermal agitation in electronic components"], correct: "a"},
        { question: "The unit decibel is used to indicate:", options: ["a. an oscilloscope wave form", "b. a mathematical ratio", "c. certain radio waves", "d. a single side band signal"], correct: "b"},
        { question: "The value of a resistor creating thermal noise is tripled. The noise power generated is therefore:", options: ["a. halved", "b. quadrupled", "c. doubled", "d. unchanged"], correct: "d"},
        { question: "Which of the following oscillators is used to provide a highly stable output at a very precise frequency?", options: ["a. Crystal", "b. Hartley", "c. Colpitts", "d. Armstrong"], correct: "a"},
        { question: "Which of the following is not used for communications?", options: ["a. x-rays", "b. millimeter waves", "c. infrared", "d. microwaves"], correct: "a"},
        { question: "Distortion is caused by:", options: ["a. creation of harmonics of baseband frequencies", "b. baseband freqeuncies mixing with each other", "c. shift in phase relationships between baseband frequencies", "d. all of the above"], correct: "d"},
        { question: "What is a spectrum analyzer?", options: ["a. a description of signal with respect to time", "b. an instrument that shows signal waveforms", "c. a description of signal with respect to its frequency", "d. an instrument that shows amplitude-versus-frequency plot"], correct: "d"},
        { question: "The term bel is a unit of measurement that expresses which of the following relationships?", options: ["a. ratio of voltage and resistance", "b. logarithmic ratio between input and output", "c. geometric progression from input to output", "d. ratio of voltage to current"], correct: "b"},
        { question: "Which of the following desicribes white noise?", options: ["a. noise that is produced by random motion of electrons in a conductor due to heat", "b. noise that is due to random variations in current flow in active devices such as tubes, transistors, semiconductor diodes, etc.", "c. noise power that varies inversely with frequency", "d. any modification to a stream of carriers as they pass from input to output of a device produces an irregular, random variation"], correct: "a"},
        { question: "Noise in the communication system originates in:", options: ["a. the sender", "b. the receiver", "c. the channel", "d. all of the above"], correct: "d"},
        { question: "If a periodic voltage waveform is symmetric about the vertical axis, it is said to have axes, or mirror, symmetry and is called a/n:", options: ["a. even function", "b. odd function", "c. half-wave symmetry", "d. full-wave symmetry"], correct: "a"},
        { question: "Which of the following describes pink noise?", options: ["a. noise that is produced by random motion of electrons in a conductor due to heat", "b. noise that is due to random variations in current flow in active devices such as tubes, transistors, semiconductor diodes, etc.", "c. noise power that varies inversely with frequency", "d. any modification to a stream of carriers as they pass from input to output of a device produces an irregular, random variation"], correct: "c"},
        { question: "Man-made noise can come from:", options: ["a. equipment that sparks", "b. temperature", "c. static", "d. all of the above"], correct: "a"},
        { question: "Signal attenuation can be corrected by:", options: ["a. filtering", "b. modulation", "c. equalization", "d. amplification"], correct: "d"},
        { question: "The part of a sine wave that is above the voltage reference line is referred to as the:", options: ["a. peak amplitude", "b. positive alternation", "c. negative alternation", "d. instantaneous amplitude"], correct: "b"},
        { question: "Propagation time is _____ proportional to distance and _____ proportional to propagation speed.", options: ["a. inversely; directly", "b. directly; inversely", "c. inverseley; inversely", "d. directly; directly"], correct: "b"},
        { question: "Which noise figure represents the lowest noise?", options: ["a. 1.5 dB", "b. 2.0 dB", "c. 3.7 dB", "d. 4.1 dB"], correct: "a"},
        { question: "Thermal noise is generated in:", options: ["a. transistors and diodes", "b. resistors", "c. copper wire", "d. all of the above"], correct: "d"},
        { question: "What is noise?", options: ["a. the signal loses strength due to the resistance of the transmission medium", "b. the signal loses strength due to different propagation speeds of each frequency that makes up the signal", "c. an outside source such as crosstalk corrupts a signal", "d. any of these"], correct: "c"},
        { question: "The degree to which a cycle has been completed at any given instant is referred to as the:", options: ["a. phase", "b. period", "c. frequency", "d. amplitude"], correct: "b"},
        { question: "A display of signal amplitude versus frequency is called the:", options: ["a. time domain", "b. frequency spectrum", "c. amplitude spectrum", "d. frequency domain"], correct: "d"},
        { question: "What happens to a signal's frequency as its wavelength gets longer?", options: ["a. it disappears", "b. it stays the same", "c. it goes down", "d. it goes up"], correct: "c"},
        { question: "The following are characteristics of atmospheric noise, except:", options: ["a. it is caused by lightning discharges in thunderstorms", "b. dominates at higher frequencies", "c. has a very high peak-to-average power ratio", "d. also called static noise"], correct: "b"},
        { question: "A digital signal is a:", options: ["a. continuous signal which represents digital measurements", "b. continuous signal which represents physical measurements", "c. discrete time signal generated by analog modulation", "d. discrete time signal generated by digital modulation"], correct: "d"},
        { question: "Indicate the false statement. From the transmitter the signal deterioration because of noise is usually:", options: ["a. unwanted energy", "b. predictable in character", "c. present in the transmitter", "d. due to any cauase"], correct: "b"},
        { question: "What is simplex operation?", options: ["a. transmitting and receiving over a wide area", "b. transmitting on one freqeuncy and receiving on another", "c. transmitting one-way communications", "d. transmitting and receiving on the same frequency"], correct: "d"},
        { question: "Which of the following statemtns describes the relationship of input and output signals in an amplifier?", options: ["a. the input signal is actually changed into the output signal", "b. both the input and output signal are unchanged; neither is affected by the other", "c. the input signal is controlled by the ouput signal and the output signal remains unchanged", "d. the input signal remains unchanged and the output signal is controlled by the input signal"], correct: "d"},
        { question: "Indicate the false statement. The need for modulation can be best exemplified by the following.", options: ["a. antenna lengths will be approximately lambda/4", "b. an antenna in the standard broadcast am band is 16,000 ft", "c. all sound is concentrated from 20 Hz to 20 kHz", "d. a message is composed of unpredictable variations in both amplitude and frequency"], correct: "a"},
        { question: "A more precise evaluation of the quality of a receiver as fasr as noise is concerned", options: ["a. S/N", "b. VSWR", "c. noise factor", "d. noise margin"], correct: "c"},
        { question: "The three primary communincations media are the following, except:", options: ["a. wires", "b. free space", "c. waveguides", "d. fiber optic cable"], correct: "c"},
        { question: "Noise figure is a measure of:", options: ["a. how much noise is in a communication system", "b. how much noise is in the channel", "c. how much noise  an amplifier adds to a signal", "d. signal-to-noise ratio in dB"], correct: "c"},
        { question: "For a given bandwidth signal, more channel space is available for signals in the range of:", options: ["a. HF", "b. UHF", "c. SHF", "d. EHF"], correct: "d"},
        { question: "Approximate wavelength of green light:", options: ["a. 700 nm", "b. 530 nm", "c. 475 nm", "d. 400 nm"], correct: "b"},
        { question: "Why are amplifiers used in electronic devices?", options: ["a. to provide signals of usable amplitude", "b. to pick up broadcast signals", "c. to select the proper broadcast signal", "d. to change the broadcast signal to an audio signal"], correct: "a"},
        { question: "Which of the following can be determined from a frequency-domain graph of a signal?", options: ["a. badnwidth", "b. phase", "c. power", "d. all of the above"], correct: "a"},
        { question: "Indicate the false statement. The square of the thermal noise voltage generated by a resistor is proportional to:", options: ["a. its resistance", "b. its temperature", "c. Boltzmanns's constant", "d. the bandwidth over which it is measured"], correct: "c"},
        { question: "The original electrical information signal cto be transmitted is called the:", options: ["a. modulating signal", "b. carrier", "c. baseband signal", "d. source signal"], correct: "c"},
        { question: "The Hartley oscillator uses:", options: ["a. a tapped inductor", "b. a two-capacitor divider", "c. an RC time constant", "d. a piezoelectric crystal"], correct: "a"},
        { question: "What is an oscilloscope?", options: ["a. a description of signal with respect to time", "b. an instrument that shows signal waveforms", "c. a description of signal with respect to its frequency", "d. an instrument that shows amplitude-versus-frequency plot"], correct: "b"},
        { question: "Most internal noise comes from:", options: ["a. shot noise", "b. transit-time noise", "c. thermal agitation", "d. skin effect"], correct: "c"},
        { question: "Wavelength is _____ propotional to propagation speed and _____ proportional to periode.", options: ["a. inversely; directly", "b. directly; inversely", "c. inversely; inversely", "d. directly; directly"], correct: "d"},
        { question: "Random interference to transmitted signals is called:", options: ["a. adjacent channel overlap", "b. cross talk", "c. garbage-in-garbage-out", "d. noise"], correct: "d"},
        { question: "Shot noise is generated in:", options: ["a. transistors and diodes", "b. resistors", "c. copper wire", "d. none of the above"], correct: "a"},
        { question: "The wavelength of a signal depends on the:", options: ["a. frequencies of the signal", "b. medium", "c. phase of the signal", "d. A and B"], correct: "d"},
        { question: "Which of the following is different from the other?", options: ["a. facsimile", "b. telemetry", "c. videotex", "d. teletex"], correct: "b"},
        { question: "The communications medium caused the signal to be:", options: ["a. amplified", "b. modulated", "c. attenuated", "d. interfered with"], correct: "c"},
        { question: "The power density of flicker noise is:", options: ["a. the same at all frequencies", "b. greater at high frequencies", "c. great at low frequencies", "d. the same as white noise"], correct: "c"},
        { question: "An analog signal is a:", options: ["a. continuous signalwhich represents digital measurement", "b. continuous signal which represents physical measurements", "c. discrete time signals generated by analog modulation", "d. discrete time signals generated by digital modulation"], correct: "b"},
        { question: "Which of the following is not a source of noise?", options: ["a. another communication signal", "b. atmospheric effects", "c. manufactured electrical systems", "d. thermal agitation in electronic components"], correct: "a"},
        { question: "So called 1/f noise is also called:", options: ["a. random noise", "b. pink noise", "c. white noise", "d. partition noise"], correct: "b"},
        { question: "What is distortion?", options: ["a. the signal loses strength due to the resistance of the transmission medium", "b. the signal loses strength due to the different propagation speeds of each frequency that makes up the signal", "c. an outside source such as crosstalk corrcupts a signal", "d. any of these"], correct: "b"},
        { question: "Pink noise has:", options: ["a. equal power per Hertz", "b. equal power per octave", "c. constant power", "d. none of the above"], correct: "b"},
        { question: "If a periodic voltage waveform is such that the waveform for the first half cycle repeats itself except with the opposite sign for the second half cycle, it is said to have:", options: ["a. even function", "b. odd function", "c. half-wave symmetry", "d. full-wave symmetry"], correct: "c"},
        { question: "Given two sine waves A and B, if the frequency of A is half that of B, then the period of B is _____ that of A.", options: ["a. one-half", "b. twice", "c. the same as", "d. indeterminate from"], correct: "a"},
        { question: "A network has a loss of 10 dB. What power ratio corresponds to this loss?", options: ["a. 0.1", "b. 0.01", "c. 10", "d. 100"], correct: "a"},
        { question: "A network has a power gain of -6 dB. If the input power is 100 watts, the output power is:", options: ["a. 25 Watts", "b. 35 Watts", "c. 50 Watts", "d. 70 Watts"], correct: "a"},
        { question: "A power level of 60 uW could be expressed as:", options: ["a. 9.72 Np", "b. -9.72 Np", "c. 4.86 Np", "d. -4.86 Np"], correct: "d"},
        { question: "A signal is measured at two different points. The power is P1 at the first point and P2 at the second point. The dB is 0. This means:", options: ["a. P2 is zero", "b. P2 equals P1", "c. P2 is much larger than P1", "d. P2 is much smaller than P1"], correct: "b"},
        { question: "An amplifier with 20 dB gain is connected to another with 13 dB gain by means of a transmission line with a loss of 2.8 dB; if a signal with a power level of -10 dBm were applied to the system, calculate the power output.", options: ["a. 20.2 dB", "b. 20.2 dBk", "c. 20.2 dBu", "d. 20.2 dBm"], correct: "d"},
        { question: "A combiner has 2 inputs of 20 dBm, what is the resultant output?", options: ["a. 13 dBm", "b. 28 dBm", "c. 20 dBm", "d. 23 dBm"], correct: "d"},
        { question: "A power level of 60 uW could be expressed as:", options: ["a. -42.22 dBm", "b. 17.78 dBm", "c. 47.78 dBm", "d. -12.22 dBm"], correct: "d"},
        { question: "A system having an input power of a 8mW an output power of 0.8 mW has a loss of:", options: ["a. -10 dB", "b. 10 dB", "c. -40 dB", "d. 40 dB"], correct: "b"},
        { question: "A network that has an input of 25 dB and an output of 15 dB. The loss of the network is:", options: ["a. -10 dB", "b. 10 dB", "c. -10 dBm", "d. 10 dBm"], correct: "b"},
        { question: "A network hasloss of 10 dB. What voltage ratio corresponds to this loss?", options: ["a. 0.316", "b. 0.366", "c. 0.1", "d. 0.01"], correct: "a"},
        { question: "If you have available number of power amplifiers with a gain of 100 each, how many such amplifiers do you need to cascade to give an overall gain of 100 dB?", options: ["a. 2", "b. 5", "c. 4", "d. 3"], correct: "b"},
        { question: "What is the difference between 20 dBm and -28 dBm?", options: ["a. 48 dB", "b. 48 dBm", "c. -48 dB", "d. -48 dBm"], correct: "a"},
        { question: "A current change that is equal to thrice its original value will correspond to a change of:", options: ["a. 3.54 dB", "b. 4.77 dB", "c. 5.65 dB", "d. 9.54 dB"], correct: "d"},
        { question: "What does a power difference of -4.77 dB mean?", options: ["a. a loss of one-half of the power", "b. a loss of one-third of the power", "c. a loss of 3 watts of power", "d. no significant change"], correct: "b"},
        { question: "A gain of 50 dB is the same gain as of:", options: ["a. 31.623 volts/volt", "b. 1000 volts/volt", "c. 316.23 volts/volt", "d. 100000 volts/volt"], correct: "c"},
        { question: "The input current of a network is 200 uA and the output is 2.8 uA. The loss in decibels is:", options: ["a. -18.54 dB", "b. 18.54 dB", "c. -37.08 dB", "d. 37.08 dB"], correct: "d"},
        { question: "If four networks connected in series have gains of -2.8 dB, -1.3 dB, -2.0 dB and 20 dB, overall gain is:", options: ["a. 19.3 dB", "b. -19.3 dB", "c. 13.9 dB", "d. -13.9 dB"], correct: "c"},
        { question: "A network has a loss of 10 dB. What current ratio corresponds to this loss?", options: ["a. 0.316", "b. 0.366", "c. 0.1", "d. 0.01"], correct: "a"},
        { question: "A theoretical antenna has a gain of 1 dB. Its gain in Nepers is:", options: ["a. 8.686", "b. 0.1151", "c. 6.868", "d. 0.5111"], correct: "b"},
        { question: "You add a 9 dB gain amplifier to your 2 Watts handheld. What is the power output of the combination?", options: ["a. 11 Watts", "b. 16 Watts", "c. 20 Watts", "d. 18 Watts"], correct: "b"},
        { question: "The signal-to-noise ratio is 30 dB at the input toan amplifier and 27.3 dB at the output. What is the noise temperature of the amplifier?", options: ["a. 249 K", "b. 248 K", "c. 247 K", "d. 246"], correct: "a"},
        { question: "An amplifier operating over a 4 MHz bandwidth has a 100 ohms input resistance. It is operating at 27 degrees Celsius, has a voltage gain of 200 and has input signal of 5 uVrms. Determine the rms output noise signal.", options: ["a. 315 uV", "b. 415 uV", "c. 515 uV", "d. 615 uV"], correct: "c"},
        { question: "Calculate the thermal noise voltage of two resistors, 5 kilo-ohms and 20 kilo-ohms, for a 10 kHz bandwidth at 27 degrees Celsius if they are connected in parallel.", options: ["a. 0.51 uV", "b. 0.61 uV", "c. 0.71 uV", "d. 0.81 uV"], correct: "d"},
        { question: "What is the overall signal-to-noise ratio in dB of a tandem connectection with the following individual signal-to-noise ratio: first stage = 10 dB, second stage = 15 dB and third stage = 20 dB?", options: ["a. 6.48 dB", "b. 7.48 dB", "c. 8.48 dB", "d. 9.48 dB"], correct: "c"},
        { question: "If all the stages in a tandem circuit have identical signal-to-noise of 15 dB. then what is the overall signal-to-noise in dB of the connection when there are 5 stages?", options: ["a. 7.01 dB", "b. 8.01 dB", "c. 9.01 dB", "d. 10.01 dB"], correct: "b"},
        { question: "For three cascaded amplifier stages, each with noise figures of 3 dB and power gains of 10 dB, determine the total noise figure in dB.", options: ["a. 2.11", "b. 3.24", "c. 1.67", "d. 3.78"], correct: "b"},
        { question: "An amplifier with an overall gain of 20 dB is impressed with a signal whose power level is 1 watt. Calculate the power output in dBm.", options: ["a. 50", "b. 6", "c. 60", "d. 10"], correct: "a"},
        { question: "Determine the shot noise for a diode with a forward bias of 1.40 mA over an 80 kHz bandwidth.", options: ["a. 0.005 uA", "b. 0.006 uA", "c. 0.004 uA", "d. 0.007 uA"], correct: "b"},
        { question: "A three-stage has stages with the following specifications: first stage with a power gain and noise factor of 10 and 2 respectively, 25 and 4 for the second stage and 30 and 5 for the third stage. Find the total noise figure.", options: ["a. 3.65", "b. 2.316", "c. 3.65 dB", "d. 2.316 dB"], correct: "c"},
        { question: "A transistor has a measured S/N power of 60 at its input and 19 at its output. Determine the noise figure of the transistor.", options: ["a. 8 dB", "b. 7 dB", "c. 6 dB", "d. 5 dB"], correct: "d"},
        { question: "Two resistors rated 5 ohms and 10 ohms are connected in series and are at 27 degrees Celsius. Calculate their combined thermal noise voltage for a 10 kHz bandwidth?", options: ["a. 0.0214 uVrms", "b. 0.060 uVrms", "c. 0.030 uVrms", "d. 0.0498 uVrms"], correct: "d"},
        { question: "An attenuator has a loss of 26 dB. If a power of 3 W is applied to the attenuator, find the output power.", options: ["a. 7.54 mW", "b. 7.27 mW", "c. 7.80 mW", "d. 7.63 mW"], correct: "a"},
        { question: "A 300 ohm resistor is connected across the 300 ohm antenna input of the television receiver. Find the noise power.", options: ["a. 24.02 fW", "b. 12.01 fW", "c. 22.04 fW", "d. 48.04 fW"], correct: "a"},
        { question: "The noise produced by a resistor is to be amplified by a noiseless amplifier having a voltage gain of 75 and a badnwidth of 100 kHz. A sensitive meter at the output reads 240 microvolts rms. Assuming operation at 37 degrees, calculate the resistor's resistance.", options: ["a. 4 kilo ohms", "b. 6 kilo ohms", "c. 5 kilo ohms", "d. 7 kilo ohms"], correct: "b"},
        { question: "A 350 kHz bandwidth produced by a tuned circuit will produce what effective noise bandwidth?", options: ["a. 549.78 kHz", "b. 568.87 kHz", "c. 543.12 kHz", "d. 598.19 kHz"], correct: "a"},
        { question: "A transistor has a measured S/N power of 60 at its input and 19 at its output. Determine the noise factor of the transistor.", options: ["a. 3.16", "b. 5", "c. 3.16 dB", "d. 5 dB"], correct: "a"},
        { question: "A mixer stage has a noise figure of 20 dB, and this is preceded by an amplifier that has a noise figure of 9 dB and an available power gain of 15 dB. Calculate the overall noise figure referred to the input.", options: ["a. 11.07", "b. 10.44 dB", "c. 2920.3 dB", "d. 11.07 dB"], correct: "b"},
        { question: "An amplifier has a noise figure of 3 dB. What is the equivalent noise temperature?", options: ["a. 290 K", "b. 230 K", "c. 340 K", "d. 145 K"], correct: "a"},
        { question: "The diode noise generator is required to produce 10 uV of noise in a receiver with an input impedance of 75 ohms, resistive, and a noise power bandwidth of 200 kHz. What is the noise current?", options: ["a. 289 mA", "b. 134 mA", "c. 276 mA", "d. 314 mA"], correct: "b"},
        { question: "A mixer stage has a noise figure of 20 dB, and this is preceded by an amplifier that has a noise figure of 9 dB and an available power gain of 15 dB. Calculate the overall equivalent noise temperature referred to the input.", options: ["a. 11.07 K", "b. 10.44 dB", "c. 2920.3 K", "d. 11.07 dB"], correct: "c"},
        { question: "What is the percent total harmonic distortion for a fundamental frequecny with amplitude of 10 Vrms, second harmonic amplitude of 0.2 Vrms, and the third harmonic amplitude of 0.1 Vrms?", options: ["a. 2.24%", "b. 2.5%", "c. 1.25%", "d. 3.5%"], correct: "a"},
        { question: "A 3-stage amplifier is to have an overall noise temperature no greater than 70 degrees K. the overall gain of the amplifier is to be at least 45 dB. The amplifier is to be build by adding a low-noise first stage to an existing amplifier with exisiting characterisitcs as follows: Stage 2 has 20 dB power gain; 3 dB noise figure. Stage 3 has a 15 dB power gain and 6 dB noise figure. Calculate the maximum noise figure that the first stage have.", options: ["a. 0.56", "b. 1.137", "c. 0.56 dB", "d. 1.137 dB"], correct: "c"},
        { question: "A receiver has a noise power bandwidth of 10 kHz. A resistor that matches the receiver input impedance is connected across its antenna terminals. What is the noise power contributed by that resistor in receiver bandwidth?", options: ["a. 4.00 x 10^-17 W", "b. 14.1 x 10^-17 W", "c. 3.67 x 10^-16 W", "d. 12.4 x 10^-16 W"], correct: "a"},
        { question: "A three-stage has stages with the following specifications: First stage with power gain and noise figure of 10 dBand 3 dB respectively, 14 dB and 6 dB for the second stage and 14.77 dB and 7 dB for the third stage. Find the noise temperature.", options: ["a. 282 K", "b. 822 K", "c. 377 K", "d. 392 K"], correct: "c"},
        { question: "What is the effect of the signal to noise ratio of the system (in dB) if the bandwidth is tripled, considering all other parameters to remain unchanged except the normal thermal noise only. The S/N will be:", options: ["a. increase by 4.77 dB", "b. decrease by 4.77 dB", "c. increased by 0.33 dB", "d. decreased by 0.33 dB"], correct: "b"},
        { question: "The signal power of an input to an amplifier is 100 uW and the noise power is 1 uW. At the output, the signal power is 1 W and the noise power is 40 mW. What is the amplifier noise figure?", options: ["a. 4 dB", "b. 18 dB", "c. 6 dB", "d. 25 dB"], correct: "c"},
        { question: "The resistor R1 and R2 are connected in series at 300 degrees K and 400 degrees K temperature respectively. If R1 is 200 ohms and R2 is 300 ohms, finthe power at the load (Rl = 500 ohms) over the bandwidth of 100 kHz.", options: ["a. 1.98 fW", "b. 0.996 fW", "c. 0.98 fW", "d. 0.496 fW"], correct: "d"},
        { question: "The envelop of an AM signal is due to:"
        , options: ["a. the basedband signal", "b. the carrier signal", "c. the amplitude signal", "d. none of the above"]
        , correct: "a"},
        { question: "Spectrum analysis is used to view which of the following characteristics"
        , options: ["a. phase", "b. bandwidth", "c. modulating wave", "d. modulation envelope"]
        , correct: "b"},
         { question: "Amplitude modulation that vary the carrier amplitude with the modulating signal by passing it through an attenuator work on the principle of:"
        , options: ["a. rectification", "b. resonance", "c. variable resistance", "d. absorption"]
        , correct: "c"},
        { question: "Overmodulation causes:"
        , options: ["a. distortion", "b. splatter", "c. both A and B", "d. none of the above"]
        , correct: "c"},
         { question: "In an AM wave, where is the audio intelligence located?"
        , options: ["a. in the carrier frequency", "b. in the spacing between the sideband frequencies", "c. in the spacing between the carrier and sideband frequencies", "d. in the sideband frequencies"]
        , correct: "c"},
        { question: "The component used to produce AM at very high frequencies is a:"
        , options: ["a. varactor", "b. thermistor", "c. cavity resonator", "d. PIN diode"]
        , correct: "d"},
         { question: "A sigle-sideband signal contains 2 kW. How much power is contained in the carrier?"
        , options: ["a. 0 W", "b. 500W", "c. 1kW", "d. 2kW"]
        , correct: "a"},
        { question: "At 100% modulation, the total sideband power is:"
        , options: ["a. equal to the carrier power", "b. twice the carrier power", "c. half the carrier power", "d. 1.414 x carrier power"]
        , correct: "c"},
        { question: "In an FM signal, (a) the rate of shift is proporional to what characteristic of the modulating signal, and (b) the amount of shift is proportional to what characteristic?"
        , options: ["a. (a) amplitude (b) amplitude", "b. (a) amplitude (b) frequency", "c. (a) frequency (b) frequency", "d. (a) frequency (b) amplitude"]
        , correct: "c"},
        { question: "If an AM radio station increases its modulation index, you would expect:"
        , options: ["a. the audtio to get louder at the receiver", "b. the received RF signal to increase", "c. the signal-to-noise ration to increase", "d. all of the above"]
        , correct: "d"},
         { question: "Frequencies that are located between adjacent channels to prevent interference are referred to as:"
        , options: ["a. sidebands", "b. bandwidths", "c. guardb bands", "d. blank channels"]
        , correct: "c"},
        { question: "The modulation index can be derived from:"
        , options: ["a. the time-domain signal", "b. the frequency-domain signal", "c. both A and B", "d. none of the above"]
        , correct: "c"},
         { question: "What type of circuit is used to remove the AM component in the output of a semiconductor reactance modulator?"
        , options: ["a. a mixer", "b. a filter", "c. a limiter", "d. a buffer amplifier"]
        , correct: "c"},
        { question: "The most commonly used amplitude demodulator is the:"
        , options: ["a. diode mixer", "b. balance modulator", "c. envelope detector", "d. crystal filter"]
        , correct: "c"},
         { question: "In AM, at 100% modulation:"
        , options: ["a. overmodulation will occur", "b. the peak voltages of the modulating signal and the carrier are equal", "c. it is the typical value of modulation index", "d. all of these"]
        , correct: "b"},
        { question: "The main problem in using a quadrature AM would be:"
        , options: ["a. requires too much bandwidth", "b. requires too much power", "c. incompatibility with ordinary AM radios", "d. all of the above"]
        , correct: "c"},
        { question: "Which symbol in radio signal emission designation is referred to type of modulation of the main carrier?"
        , options: ["a. second", "b. fourth", "c. third", "d. first"]
        , correct: "d"},
        { question: "As compared to plain AM, SSB AM:"
        , options: ["a. is more efficient", "b. requires a more complex demodulator circuit", "c. requires less bandwidth", "d. all of the above"]
        , correct: "d"},
         { question: "As the positive potential is increased on the cathod of a varactor, (a) what happens to reverse bias and (b) how is dialectric width affected?"
        , options: ["a. (a) increases (b) increases", "b. (a) increases (b) decreases", "c. (a) decreases (b) decreases", "d. (a)decreases (b)increases"]
        , correct: "a"},
        { question: "A widely used balanced modulator is called the:"
        , options: ["a. diode bridge circuit", "b. full wave bridge rectifier", "c. lattice modulator", "d. balance bridge modulator"]
        , correct: "c"},
         { question: "Which of the following is not true about AM?"
        , options: ["a. the carrier amplitude varies", "b. the carrier frequency remains constant", "c. the carrier frequency changes", "d. the information signal amplitude changes the carrier amplitude"]
        , correct: "c"},
        { question: "If an SSB transmitter radiates 1000 watts at peak modulation, what will it radiate with no modulation?"
        , options: ["a. 1000 Watts", "b. 500 Watts", "c. 250 Watts", "d. 0 Watt"]
        , correct: "d"},
         { question: "In a phase modulator, the frequency during the constant-amplitude portion of the modulating wave is the:"
        , options: ["a. peak frequency", "b. rest frequency", "c. deviation frequency", "d. modulating frequency"]
        , correct: "b"},
        { question: "In a diode ring modulator, the diode acts like:"
        , options: ["a. variable resistor", "b. switches", "c. rectifiers", "d. variable capacitors"]
        , correct: "b"},
        { question: "First symbol in the designation of radio signals emission which refers to use of an unmodulated carrier"
        , options: ["a. J", "b. N", "c. H", "d. A"]
        , correct: "b"},
        { question: "Music on AM radio stations is low-fidelity because:"
        , options: ["a. AM is susceptible to noise", "b. commercial AM stations use low power", "c. commercial AM stations have a narrow bandwidth", "d. all of the above"]
        , correct: "c"},
         { question: "In phase modulation, (a) the amplitude of the modulating signal determines what characteristic of the phase shift, and (b) the frequency of the modulating signal determines what characteristic of the phase shift?"
        , options: ["a. (a) rate (b) rate", "b. (a) rate (b) amount", "c. (a) amount (b) amount", "d. (a)amount (b)rate"]
        , correct: "d"},
        { question: "In AM, what is modulation index?"
        , options: ["a. the term used to describe the amount of frequency change in an AM waveform", "b. also known as depth of modulation", "c. it is computed as the ration of carrier voltage and modulating voltage", "d. all of these"]
        , correct: "b"},
         { question: "The type of information that can be sent using AM is:"
        , options: ["a. audio", "b. video", "c. digital data", "d. all of the above"]
        , correct: "d"},
        { question: "The primary advantage of phase modulation over frequency modulation is that phase modulation has better carrier:"
        , options: ["a. power stability", "b. amplitude stability", "c. frequency stability", "d. directional stability"]
        , correct: "c"},
         { question: "The most common used filter in SSB generators uses:"
        , options: ["a. LC networks", "b. mechanical resonators", "c. crystal", "d. RC networks and op amps"]
        , correct: "c"},
        { question: "A third symbol emission which represent data transmission including telemetry and telecommand."
        , options: ["a. B", "b. D", "c. C", "d. N"]
        , correct: "b"},
        { question: "To demodulate a USB SSB signal, the receiver must:"
        , options: ["a. be set to USB mode", "b. reinsert the carrier", "c. both A and B", "d. none of the above"]
        , correct: "c"},
        { question: "When a carrier is modulated by square wave, what maximum number of sideband pairs will be generated?"
        , options: ["a. 1", "b. 9", "c. 3", "d. an infinite number"]
        , correct: "d"},
         { question: "The equivalent circuit of a quartz crystal is a :"
        , options: ["a. series resonant circuit", "b. parallel resonant circuit", "c. neither A nor B", "d. both A and B"]
        , correct: "d"},
        { question: "Indicate which one of the following is not an advantage of FM over AM:"
        , options: ["a. better noise immunity is provided", "b. lower bandwidth is required", "c. transmitter power is more useful", "d. less modulating power is required"]
        , correct: "b"},
         { question: "The FM modulation index:"
        , options: ["a. increase with both deviation and modulation frequency", "b. increases with deviation and decreases with modulation frequency", "c. decreases with deviation and increases with modulation frequency", "d. is equal to twice the deviation"]
        , correct: "b"},
        { question: "When the FM reception deteriorates abruptly due to noise, it is called"
        , options: ["a. the capture effect", "b. the threshold effect", "c. the noise effect", "d. the limit effect"]
        , correct: "b"},
         { question: "When compared to a conventional AM signal, an SSB signal provides which of the following advantages?"
        , options: ["a. improved frequency stability", "b. increased receiver gain", "c. reduced distortion", "d. reduced bandwidth"]
        , correct: "d"},
        { question: "If the amplitude of the modulating signal decreases, the carrier deviation:"
        , options: ["a. increases", "b. decreases", "c. remains constant", "d. goes to zero"]
        , correct: "b"},
        { question: "Widest bandwidth in a double-tuned circuit is obtained with:"
        , options: ["a. undercoupling", "b. critical coupling", "c. optimum coupling", "d. overcoupling"]
        , correct: "d"},
        { question: "Automatic gain control permits a wide range of signal amplitudes to be accommodated by controlling the gain of the:"
        , options: ["a. RF amplifier", "b. IF amplifier", "c. mixer", "d. AF amplifier"]
        , correct: "b"},
         { question: "An AFC circuit is used to correct for:"
        , options: ["a. audio distortion", "b. strong input signals", "c. instability in the IF amplifier", "d. frequency drift in the LO"]
        , correct: "d"},
        { question: "The function of AFC is:"
        , options: ["a. maintain a constant IF frequency", "b. match the local oscillator to the received signal", "c. lock the discriminator to the IF frequency", "d. none of the above"]
        , correct: "b"},
         { question: "The main function of AGC is to"
        , options: ["a. keep the gain of the receiver constant", "b. keep the gain of the IF amplifiers constant", "c. keep the input to the detector at a constant amplitude", "d. all of the above"]
        , correct: "c"},
        { question: "A BFO is used in the demodulation of which types of signals?"
        , options: ["a. AM", "b. FM", "c. SSB or CW", "d. QPSK"]
        , correct: "c"},
         { question: "An FM receiver switching suddenly between two stations on nearby frequencies is called:"
        , options: ["a. the capture effect", "b. the threshold effect", "c. the two-station effect", "d. none of the above"]
        , correct: "a"},
        { question: "In the phasing method of SSB generation, one sideband is canceled out due to:"
        , options: ["a. phase shift", "b. sharp selectivity", "c. carrier suppression", "d. phase inversion"]
        , correct: "a"},
        { question: "Audio signals are not propagated directly to space because:"
        , options: ["a. to do so will entail additional costs", "b. the signal will be highly attenuated", "c. they will require antennas that are too long", "d. the signal that will be propagated will be too weak"]
        , correct: "c"},
        { question: "A resonant circuit is:"
        , options: ["a. a simple form of bandpass filters", "b. used in narrowband RF amplifiers", "c. both A and B", "d. none of the above"]
        , correct: "c"},
         { question: "What is the purpose of a buffer amplifier?"
        , options: ["a. to provide a direct connection between the oscillator and the load", "b. to amplify the output signal of the oscillator", "c. to remove frequency distortion from the oscillator", "d. to prevent load variations from affecting the oscillator"]
        , correct: "d"},
        { question: "A balance modulator used to demodulate a SSB signal is called a(n):"
        , options: ["a. transponder", "b. product detector", "c. converter", "d. modulator"]
        , correct: "b"},
         { question: "Loading down a tuned-circuit amplifier will:"
        , options: ["a. raise the Q of the tuned circuit", "b. lower the Q of the tuned circuit", "c. multiply the Q", "d. have no effect on Q"]
        , correct: "b"},
        { question: "In a buffer amplifier, what is the impedance in the (a) input and (b) output?"
        , options: ["a. (a) low (b) low", "b. (a) low (b) high", "c. (a) high (b) high", "d. (a) high (b) low1"]
        , correct: "d"},
         { question: "Frequency translation is done with a circuit called a:"
        , options: ["a. summer", "b. multiplier", "c. filter", "d. mixer"]
        , correct: "d"},
        { question: "In RF amplifiers, impedance matching is usually done with:"
        , options: ["a. RC coupling", "b. transformer coupling", "c. direct coupling", "d. lumped reactance"]
        , correct: "b"},
        { question: "The ability of a circuit to faithfully reproduce the input signal in the output is known by what term?"
        , options: ["a. fidelity", "b. fluctuation", "c. directivity", "d. discrimination"]
        , correct: "a"},
        { question: "The inputs to mixer are fo and fm. In down conversion, which of the following mixer output signal is slected?"
        , options: ["a. fo", "b. fm", "c. fo-fm", "d. fo+fm"]
        , correct: "c"},
        { question: "To provide to or more voice cirucits with the same carrier, what system must be used?"
        , options: ["a. vestigial sideband system", "b. pilot carrier system", "c. ISM emission", "d. limcomplex"]
        , correct: "c"},
        { question: "One of the following cannot be used to remove unwanted sideband in SSB. This is the:"
        , options: ["a. filter system", "b. third method", "c. phase shift method", "d. balance modulator"]
        , correct: "d"},
         { question: "In an AM transmitter with 100% modulation, the voltage of the final RF stage will be:"
        , options: ["a. approximately half the DC supply voltage", "b. approximatetly twice the DC supply voltage", "c. approximately four times the DC supply voltage", "d. none of the above"]
        , correct: "c"},
        { question: "Over a narrow range of frequencies, the PLL acts like a:"
        , options: ["a. low-pass filter", "b. bandpass filter", "c. tunable oscillator", "d. frequency modulator"]
        , correct: "b"},
         { question: "With a sine-wave input, how will the output compare to the input in (a) a linear circuit and (b) a nonlinear circuit?"
        , options: ["a. (a) proportional (b) proportional", "b. (a)proportional (b) not proportional", "c. (a) not proportional (b) not proportional", "d. (a) not proportional (b) proportional"]
        , correct: "b"},
        { question: "For a frequency multiplier to work, it requires:"
        , options: ["a. a nonlinear circuit", "b. a linear amplifier", "c. a signal containing harmonics", "d. an input signal that is an integer multiple of the desired frequency"]
        , correct: "a"},
        { question: "Overall sensitivity of a receiver is limited by which of the following factors?"
        , options: ["a. noise", "b. bandwidth", "c. output power", "d. frequency response"]
        , correct: "a"},
        { question: ""
        , options: ["a. ", "b. ", "c. ", "d. "]
        , correct: ""},
        // Add more EST questions here
    ]
};

let selectedSubject = '';
let selectedQuestions = [];
let currentQuestionIndex = 0;
let answeredCount = 0;
let correctCount = 0;
let wrongCount = 0;

function selectSubject(subject) {
    selectedSubject = subject;
    document.getElementById('subject-selection').style.display = 'none';
    document.getElementById('question-setup').style.display = 'block';
}

function setupQuestions(number) {
    selectedQuestions = questions[selectedSubject].sort(() => 0.5 - Math.random()).slice(0, number);
    document.getElementById('question-setup').style.display = 'none';
    document.getElementById('question-display').style.display = 'block';
    document.getElementById('total-count').innerText = number;
    showQuestion();
}

function showQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsDiv = document.getElementById
    ('options');
    optionsDiv.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option.charAt(0), button);
        optionsDiv.appendChild(button);
    });
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedOption, selectedButton) {
    answeredCount++;
    const correctAnswer = selectedQuestions[currentQuestionIndex].correct;
    const buttons = document.querySelectorAll(
        '#options button');

    buttons.forEach(button => {
        if (button.innerText.charAt(0) === correctAnswer) {
            button.classList.add('correct');
        } else if (button === selectedButton && selectedOption !== correctAnswer) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        correctCount++;
    } else {
        wrongCount++;
    }

    document.getElementById('answered-count').innerText = answeredCount;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('question-display').style.display = 'none';
        document.getElementById('quiz-complete').style.display = 'block';
        document.getElementById('summary-answered-count').innerText = answeredCount;
        document.getElementById('summary-correct-count').innerText = correctCount;
        document.getElementById('summary-wrong-count').innerText = wrongCount;
    }
}

function restartQuiz() {
    document.getElementById('quiz-complete').style.display = 'none';
    document.getElementById('subject-selection').style.display = 'block';
    currentQuestionIndex = 0;
    answeredCount = 0;
    correctCount = 0;
    wrongCount = 0;
    document.getElementById('answered-count').innerText = answeredCount;
    document.getElementById('correct-count').innerText = correctCount;
    document.getElementById('wrong-count').innerText = wrongCount;
}

const validUsername = "admin";  // Change to your desired username
const validPassword = "password";  // Change to your desired password

const validUsers = [
    { username: "Herbert", password: "Toppingtheboards1!" },
    { username: "Mark", password: "password1" },
    { username: "Paula", password: "password2" },
    { username: "Alex", password: "password3" }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any valid user
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Login successful, hide login page and show subject selection
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('subject-selection').style.display = 'block';
    } else {
        // Login failed, show error message
        document.getElementById('login-error').style.display = 'block';
    }

    // Prevent form from submitting (page refresh)
    return false;
}

