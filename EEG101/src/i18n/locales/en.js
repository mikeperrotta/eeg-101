export default { 

	//global
	nextLink:  ' NEXT ',
	museDisconnectedTitle:  'Muse Disconnected',
	museDisconnectedDescription:  'Please reconnect to continue the tutorial.',
	closeButton:  'CLOSE',
	connectButton:  'CONNECT',

	//begin-landing.js
	welcomeEEG101:  'Welcome to',
	tutorialDescription:  'At the end of this tutorial, you will have learned how EEG devices can be used to measure the electrical activity of the brain.',

	//connector-01.js
	step1Title:  'Step 1',
	musePowerOnWarning:  'Make sure your Muse is powered on.',
	museFirstGenWarning:  'If you are using a first generation Muse you may need to pair your device in bluetooth settings.',
	offlineModeEnable:  'ENABLE OFFLINE MODE',
	offlineModeDisable:  'DISABLE OFFLINE MODE',
	connector2Link:  ' OK, IT\'S ON ',

	//connector-02.js
	step2Title:  'Step 2',
	getStartedLink:  'GET STARTED ',
	waitMusePair:  'Wait for your Muse to pair \n with EEG 101...',

	//connector-03.js
	step3Title:  'Step 3',
	museFitProperly:  'Make sure the Muse is properly fitted to your head.',
	fitInstructions:  'Fit the earpieces snugly behind your ears and adjust the headband so that it rests mid forehead. Clear any hair that might prevent the device from making contact with your skin.',

	//slide-01.js
	introductionSlideTitle:  'INTRODUCTION',
	brainElectricity:  'Your brain produces electricity. ',
	EEGLink:  'EEG',
	deviceCanDetect:  'device that you are wearing, we can detect the electrical activity of your brain.',
	usingThe:  'Using the',
	tryBlinkingEyes:  'Try blinking your eyes...',
	doesSignalChange:  'Does the signal change?',
	eyeMovementCreates:  'Eye movements create',
	noiseLink:  'noise',
	inEEGSignal:  'in the EEG signal.',
	tryThinkingAbout:  'Try thinking about a cat...',
	althoughEEG:  'Although EEG can measure overall brain activity, it\'s not capable of',
	readingMindsLink:  'reading minds',
	tryClosingEyes10:  'Now try closing your eyes for 10 seconds.',
	mayNoticeSignalChange:  'You may notice a change in your signal due to an increase in',
	alphaWavesLink:  'alpha waves.',
	whatIsEEGTitle:  'What exactly is EEG?',
	whatIsEEGDescription:  'Electroencephalography (EEG) is a technique that measures the electrical activity of the brain with sensors that record fluctuations in voltage at the surface of the skull. The first human electroencephalogram was recorded in 1924 by Hans Berger, a German psychiatrist whose interest in ‘psychic energy\' led him to experiment with the electrical fields of the brain.',
	noiseTitle:  'Noise',
	noiseDescription:  'Movement of the eyes (which are electrically charged) and muscle activity produce electrical activity. Thus, blinking, swallowing, and clenching the jaw will all produce noise that can overpower signals originating in the brain. This can make it very difficult to read the EEG. To accurately sense the activity of the brain, movement must be kept to a minimum.',
	cannotReadMindsTitle:  'EEG cannot read minds',
	cannotReadMindsDescription:  'The EEG signal is generated when tens of thousands of brain cells fire in synchrony. Although thinking about a cat produces some change in brain activity, it is too small to affect the large-scale, rhythmic firing of the brain that EEG detects.',
	eyeRythymsTitle:  'Closed eye rhythms',
	eyeRythymsDescription:  'When the eyes are closed, there is often a large increase in rhythmic brain activity in the range of 8-13 cycles per second (Hz). These alpha waves were one of the first discoveries that Hans Berger made with EEG. The ability to detect alpha waves when the eyes are closed varies greatly from person to person, however. Don\'t feel bad if you can\'t see them!',

	// slide-01.js offline
	theBrainProduces:  'The brain produces electricity',
	thisExample:  'This is an example of',
	dataShowing:  'data, showing the electrical activity of the brain',
	noiseInSignal:  'Noise in the EEG signal',
	differentTypes:  'The EEG is subject to many different types of',
	blinksExample:  'Blinks, for example, produce large fluctuations in the signal due to ',
	uninformativeRaw:  'For the most part, raw EEG data is pretty uninformative',
	needsProcessing:  'With processing, EEG can give clues to overall brain activity, but it is not capable of',

	//slide-02.js
	physiologySlideTitle:  'PHYSIOLOGY',
	EEGComeFrom:  'Where does the EEG signal come from?',
	EEGMeasures:  'The EEG measures the electrical activity that occurs when',
	neuronsLink:  'neurons',
	receiveAndTransmit:  'receive and transmit information.',
	organizedNeural:  'Organized neural activity produces electric fields.',
	whenBillionsOfNeurons:  'When billions of neurons',
	workTogetherLink:  'work together',
	produceThoughts:  'to produce thoughts, feelings, and behaviours, their electricity can be detected by electrodes on the scalp.',
	EEGDetects:  'EEG detects the "state" of the brain.',
	organizedElectricalActivity:  'This organized electrical activity varies between different brain states, such as',
	sleepWakefulnessLink:  'sleep and wakefulness.',
	neuralBasisEEGTitle:  'Neural basis of EEG.',
	neuralBasisEEGDescription1:  'When synapses are activated on a neuron\'s dendrites, a small electric field (dipole) is created along the body of the neuron due to the difference in charge between those dendrites and the axon. This electric field only lasts for a few milliseconds.',
	neuralBasisEEGDescription2:  'The electric fields produced by single neurons are vanishingly small. However, when large numbers of cortical neurons fire rhythmically, their activity can produce electric fields that are large enough to cross the surface of the skull. This process is influenced by many factors, including depth, orientation, and subtype of neurons, and is a topic of ongoing research.',
	brainStatesTitle:  'Brain states',
	brainStatesDescription:  'During sleep our brains produce very different kinds of rhythmic electrical activity. When awake, brain rhythms tend to be rapidly-changing and irregular, while slowly-changing, organized rhythms become more dominant as we fall asleep and pass through the multiple sleep stages. \n Certain emotions and cognitive processes have also been linked with characteristic patterns of rhythmic activity that can be identified with EEG.',

	//slide-03.js
	hardwareSlideTitle:  'HARDWARE',
	howDoesEEGDeviceWork:  'How does an EEG device work?',
	electricalActivitySensed:  'The electrical activity of the brain is sensed by',
	electrodesLink:  'electrodes',
	placedOnScalp:  'placed on the scalp.',
	deviceHas4Electrodes:  'This device has 4 electrodes.',
	touchTheHeadDiagram:  'Touch the head diagram to view the signal at each electrode. Scientists have',
	namesLink:  'names',
	forEachElectrode:  'for each of these electrodes.',
	whatElectrodesMeasure:  'What do electrodes measure?',
	voltageFluctuations:  'Each electrode detects voltage fluctuations that are compared to a',
	referenceElectrodeLink:  'reference electrode',
	amplified1Mil:  'and then amplified around 1,000,000 times.',
	electrodesTitle:  'Electrodes',
	electrodesDescription:  'An electrode is a conductor through which electricity flows. The device you are wearing (Muse) uses dry electrodes that don\'t require conductive gel and can be placed directly on the skin.',
	electrodeNamingTitle:  'Electrode naming conventions',
	electrodeNamingDescription:  'EEG electrodes are typically identified by a combination of a letter and a number. The letter indicates the part of the head where the electrode is located (F for frontal, C for central, etc.). The number indicates distance from the midline of the head with even numbers on the right hemisphere and odd numbers on the left.',
	referencingTitle:  'Referencing',
	referencingDescription:  'Each electrode\'s signal reflects the difference in electrical potential between that electrode and a seperate reference electrode. Thus, data gathered from EEG devices with different reference electrode placement can vary considerably. With Muse, the reference is located on the front of the forehead.',

	//slide-03.js offline
	devicesHaveElectrodes:  'EEG devices have multiple electrodes',

	//slide-04.js
	filteringSlideTitle:  'FILTERING',
	raw:  'Raw',
	bandPassFilter:  'Band-Pass Filter',
	meaningfulData:  'How do we get meaningful data from the EEG?',
	firstEEGMust:  'First, the EEG must be',
	filteredLink:  'filtered',
	toReduceSignals:  'to reduce signals that don\'t come from the brain.',
	filtersTitle:  'Filters',
	filtersDescription:  'Filters remove frequencies that sit outside the spectrum of signals produced by the brain, getting rid of some of the noise produced by muscles or environmental electrical activity. Filters are normally either high-pass (removing low frequencies), low-pass (removing high frequencies) or band-pass (allowing only a specific band of frequencies through). Here, we have implemented a band-pass filter that removes frequencies outside the range of those typically produced by the brain.',

	//slide-05.js
	epochingSlideTitle:  'EPOCHING',
	chunkingSignal:  'Chunking the signal',
	EEGDividedSegments:  'Next, the EEG is divided into small segments or',
	epochsLink:  'epochs',
	epochsTitle:  'Epochs',
	epochsDescription:  'The brain is constantly changing and the EEG changes with it. Dividing the EEG into epochs allows each moment in time to be analyzed individually. Analyzing how the properties of these epochs vary allows us to quantify how the brain changes over time.',

	//slide-06.js
	artefactRemovalSlideTitle:  'ARTEFACT REMOVAL',
	removingNoise:  'Removing noise',
	afterEEGDividedEpochs:  'After the EEG has been divided into epochs, those that contain a',
	significantLink:  'significant',
	amountNoiseIgnored:  'amount of noise can be ignored.',
	artefactDetectionTitle:  'Artefact detection',
	artefactDetectionDescription:  'One simple way to define a "significant amount of noise" is to compare how variable an epoch is in comparison to its neighbours. If the signal moves around in one epoch a lot more than in its neighbours, it is probably because there was an eyeblink or some other source of noise. Get rid of it!',

	//slide-07.js
	featureDetectionSlideTitle:  'FEATURE EXTRACTION',
	breakingDownEEG:  'Breaking down the EEG',
	onceNoiseRemoved:  'Once noise is removed, the EEG can be broken down into many simpler periodic signals or',
	wavesLink:  'waves',
	howEEGBrokenDown:  'How is the EEG broken down?',
	complexSignalsBrokenDown:  'Complex signals can be broken down into simpler signals with a mathematical function known as the',
	fourierTransformLink:  'Fourier Transform.',
	wavesTitle:  'Waves',
	wavesDescription:  'Each wave is characterised by a certain frequency (number of cycles per second, Hertz (Hz)). A high frequency wave has many cycles per second, whereas a low frequency wave has fewer cycles per second. Waves of different frequencies are associated with different patterns of neural firing.',
	fourierTransformTitle:  'Fourier transform',
	fourierTransformDescription:  'The Fourier Transform decomposes a complex signal into a collection of simple sine waves. Often, we use an algorithm specifically called the Fast Fourier Transform (FFT) to perform this decomposition in EEG.',

	//slide-08.js
	PSDSlideTitle:  'PSD',
	powerSpectralDensity:  'Power Spectral Density (PSD)',
	whenWeApplyFourier:  'When we apply the Fourier Transform to the EEG, we obtain a measure of signal strength at given frequencies, represented in units of',
	powerLink:  'power',
	powerTitle:  'Power',
	powerDescription:  'In this graph, the X axis represents frequency and the Y axis represents power (microvolts squared, in decibels (dB)). Power represents how strong a certain frequency is in a complex signal. When power is high for only a few frequencies, it means that the signal is primarily composed of those few elements. If all frequencies have similar power, the signal will look random and be difficult to interpret.',

	//slide-09.js
	brainWavesSlideTitle:  'BRAIN WAVES',
	whatDoFrequenciesRepresent:  'What do these frequencies represent?',
	PSDDividedBands:  'The PSD can be divided into different frequency bands (named by the greek letters δ, θ, α, β, and γ).',
	brainWaves:  'Brain Waves',
	freqCorrelatedBrain:  'Each frequency band exhibits activity correlated with different brain processes. These bands are often referred to as',
	brainWavesLink:  'brain waves',
	harnessingBrainWaves:  'Harnessing Brain Waves',
	noticePowerChanges:  'Notice how the power in a given frequency band changes over time. It is possible to harness these changes to create a simple',
	BCILink:  'brain-computer interface',
	deltaTitle:  'Delta δ (0-4 Hz)',
	deltaDescription:  'Delta waves are the slowest (i.e. lowest frequency) brain waves. Delta waves dominate during deep sleep and tend to be high in amplitude because they represent the synchronized firing of large populations of neurons.',
	thetaTitle:  'Theta θ (4-8 Hz)',
	thetaDescription:  'Theta waves are most commonly observed in the "hypnagogic" period just before falling asleep. They have also been observed during deep meditative and hypnotic states.',
	alphaTitle:  'Alpha α (8-13 Hz)',
	alphaDescription:  'Alpha waves can indicate the idling of a brain region. For example, they increase dramatically at when the eyes are closed. They are especially strong at the back of the head, where the vision centre of the brain is located.',
	betaTitle:  'Beta β (13-30 Hz)',
	betaDescription:  'Beta waves are prevalent when the brain is awake and active. They have been associated with alertness, concentration, and the active firing of neurons hard at work.',
	gammaTitle:  'Gamma γ (30-100 Hz)',
	gammaDescription:  'Gamma waves are the fastest form of neural oscillation. They are difficult to detect and analyze with ordinary EEG but are a topic of much ongoing research. They have been tentatively associated with attention, working memory, and even consciousness.',
	BCITitle:  'Brain-computer interfaces',
	BCIDescription:  'A brain-computer interface is a direct communication channel between the brain and an external device. For example, one can feed information about brain state based on EEG frequency bands to a computer; that computer then analyzes the EEG data and decides what the user intent was. The computer can use that command to control an external device such as a wheelchair or a display.',

	//slide-end.js
	thanksForCompleting:  'Thanks for completing \n EEG 101',
	hopeYouEnjoyed:  'We have tried hard to provide a simple introduction to neuroscience, signal processing, and brain-computer interfaces. Of course, there is a lot more to learn!',
	furtherLearning:  'Resources for Further Learning',
	bciResource:  'Awesome List of BCI-related Resources',
	signalProcessingResource:  'Signals and Systems MIT Course',
	machineLearningResource:  'Machine Learning is Fun!',
	projectOpenSource:  'This project is Open Source',
	resultOfCollaboration:  'EEG101 is the result of a collaboration between NeuroTechX, the international neurotechnology network, and the developers at KBDGroup. Its source code is open for anyone to use or contribute to.',
	interestedInApp:  'Interested in how an EEG app is built? Want to contribute to this project? Check out the repo on Github and our community on Slack.',
	theTeam:  'The EEG 101 Team',
	teamMemberHubert:  'Hubert Banville - Visionary',
	teamMemberDano:  'Dano Morrison - Developer',
	teamMemberGeordan:  'Geordan King - Producer',
	teamMemberMichael:  'Michael Vu - Author',
	teamMemberJoanna:  'Joanna Jang - Author',
	teamMemberBrian:  'Brian Stern - Software Architect',
	teamMemberSteve:  'Steve Harjula - Visual Design',
	teamMemberMiles:  'Miles McCraw - Animator',
	restartButton:  'RESTART TUTORIAL',

	//DeviceStatusWdiget
	widgetConnected:  'Muse connected',
	widgetDisconnected:  'No connected device',
	widgetConnecting:  'Connecting...',

	//ConnectorModule/component.js
	needsPermission:  'EEG 101 needs your permission',
	requiresLocation:  'This app requires coarse location permission in order to discover and connect to the 2016 Muse.',
	statusConnected:  'Connected',
	statusNoMusesTitle:  'No Muses were detected.',
	searchAgain:  ' SEARCH AGAIN ',
	statusConnecting:  'Connecting...',
	statusDisconnected:  'Searching for Muses',

	// bci-01.js
	bciTitle:  'BRAIN-COMPUTER INTERFACES',
	whatIsBci:  'What is a Brain-Computer Interface?',
	bciDefinition1:  'A BCI is a communication channel that allows the brain to',
	bciDefinition2:  'interact',
	bciDefinition3:  'with an external device such as a computer',
	makeUseBci:  'How can we use EEG to make a BCI?',
	recognizePatternBrain:  'We can teach a computer to execute a command when it recognizes a certain pattern of brain activity. This process is called',
	machineLearning:  'machine learning',
	buildBci:  'LET\'S BUILD A BCI',
	bciInteractionTitle:  'Types of BCI interaction',
	activeBci:  'Active BCI involves the user generating brain signals actively in order to control a computer. For example, using imagined movement of either the right or left hand to steer an avatar right or left. The function of active BCIs are to replace conventional interfaces such as keys on a keyboard.',
	reactiveBci:  'Reactive BCIs use the brain\'s natural response to stimuli in order to gauge the user\'s intent. For example, detecting visually evoked responses to flashes of light on a keyboard to allow a user to spell by focusing their eyes on specific words. Although they don\'t require direct and conscious control, reactive BCIs must be built around specific stimuli that evolve known brain responses when perceived.',
	passiveBci:  'Passive BCIs monitor the user\'s mental states without any effort their part. For example, passive BCIs might monitor attention, relaxation, or emotional state and use that information to adjust elements of a game.',
	machineLearningTitle:  'Machine Learning',
	machineLearningDefinition:  'A machine learning algorithm is a computer program that learns by looking at examples. For instance, machine learning algorithms can learn to recognize objects in a picture by looking at thousands of pictures of different objects. In an EEG BCI, this type of algorithm looks at many instances of someone\'s brain activity and finds an optimal way to recognize what the user is doing.',

	// bci-02.js
	chooseCommand:  'Choose a command',
	bciCommands:  'This BCI will allow you to execute a command on your phone by switching between two \'brain states\' \n\n First, what do you want this BCI to do?',
	offData:  'Collect "OFF" data',
	onData:  'Collect "ON" data',
	step4Title:  'Step 4',
	trainClassifier:  'Train the classifier',

	// bci-run.js
	retrainBci:  'RE-TRAIN BCI',
	endEeg101:  'END EEG 101',
	bciRunSlideTitle:  'USING YOUR MIND TO CONTROL THIS PHONE...',

	// bci-train.js
	trainSamples:  'samples',
	trainStop:  'STOP',
	trainCollect:  'COLLECT',
	trainCollectMore:  'COLLECT MORE (OPTIONAL)',
	trainOn:  'ON',
	trainOff:  'OFF',
	trainFitClassifier:  'FIT CLASSIFIER',
	trainAccuracy:  'Accuracy',
	trainReFit:  'RE-FIT',
	trainRunIt:  ' RUN IT! ',
	trainReset:  'RESET',

	// ClassifierInfoDisplayer.js
	nextTrain:  'Next, train the',
	classifierName:  'classifier',
	collectedData:  'on your data to distinguish between your brain states. \n\n The data you\'ve collected is simply the powers of the different brain waves (δ, θ, α, β) for each electrode in each epoch you collected',
	trainClassifierButton:  'TRAIN CLASSIFIER',
	classifierTitle2:  'Classifier',
	classifierPopUp:  'A classifier is a type of machine learning algorithm that learns to distinguish between two or more groups by looking at relevant features of these groups. The classifier that we are training here uses the Gaussian Naive Bayes technique to estimate the probability that a data point belongs to two distinct normal distributions. Image from Raizada and Lee, 2013',
	classifierAccuracy:  'Accuracy:',
	classifierScore:  'This score represents how well the classifier is able to distinguish between the two brain states based on the data you collected. \n\n If you are happy with your classifier\'s score you can run your BCI in real-time! Otherwise, you can start over with new data',
	classifierReTrain:  'RE-TRAIN',
	crossValidationAcc:  'Cross-validation accuracy',
	crossValidationDefinition:  'Cross-validation is a technique to evaluate the accuracy of predictive algorithms by breaking up an original set of example data into a training set and a test set. The algorithm is trained on this training set and scored on how well it predicts the values of the test set. In k-fold cross-validation, which this BCI uses, this process is repeated a number of times with different randomly selected subsamples of data each time.',

	// DataCollection.js
	collecting:  'Collecting...',
	oopsYouOnly:  'Oops! You only collected',
	epochsOfData:  'epochs of data.\n\n Remember, it is important to discard epochs that contain too much noise in order to detect signals from the brain. Try again, ensuring that your headband is fitted correctly and that blinks and movement are kept to a minumum.',
	letsTeach:  'Now, let\'s teach the algorithm the brain state you\'ll use to turn the',
	closeYourEyes:  'ON.\n\n Once again, you can try whatever you want. We recommend closing your eyes and relaxing. Click the button below to start recording another 30 seconds of data.',
	youveCollected:  'Awesome! You\'ve collected',
	totalCleanData:  'total epochs of clean data.\n\n The accuracy of machine learning is often dependent on the number of examples given to the algorithm. Consider collecting even more data to make this BCI as accurate as possible!',
	letsTeach2:  'Let\'s teach the algorithm which brain state you\'ll use to keep the',
	eyesOpen:  'OFF.\n\n You can try whatever you want, but we recommend keeping your eyes open and concentrating. When you are ready, click to record 30 seconds of data.',
	totalCleanData2:  'total epochs of clean data.\n\n For this BCI, each epoch is one second long. Those with too much noise are discarded.',

	// SideMenu.js
	toolsTitle:  'Tools',
	eegSandbox:  'EEG Sandbox',
	bciValue:  'Brain-computer interface',
	tutorialTitle:  'Tutorial',
	introductionValue:  'Introduction',
	physiologyValue:  'Physiology',
	hardwareValue:  'Hardware',
	filteringValue:  'Filtering',
	epochingValue:  'Epoching',
	artefactValue:  'Artefact Removal',
	featureValue:  'Feature Extraction',
	psdValue:  'Power Spectral Density',
	brainWavesValue:  'Brain Waves',
	brainComputerInterfaceValue:  'Brain-Computer Interfaces',
	howBuildBciValue:  'How to Build a BCI',
	infoValue:  'Information & Acknowledgements',

	// config.js
	configLight:  'the light',
	configVibrate:  'vibration',
};