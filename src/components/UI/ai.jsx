import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import Ainode from "./ainode";

export default component$(() => {

    const hoverVal = useSignal(0);

    //TODO: Add id
    const inputNodeList = [
        {
            title: "NN in Mojo",
            link: "/",
        },
        {
            title: "Visualized Transformers",
            link: "/",
        },
        {
            title: "AI Class",
            link: "/",
        },
        {
            title: "NP Research",
            link: "/",
        },
        {
            title: "LLM pre-trained",
            link: "/",
        },
    ]

    let colorList = [
        '#88B769',
        '#D35E5E',
        '#29B2AF',
        '#30A279',
        '#BCAC39',
        '#C47526',
    ]

    const nodeHighlights = {
        1: [2, 5],
        2: [2, 3, 4],
        3: [1, 2, 5, 6],
        4: [1, 2, 6],
        5: [4]
    }

    const node1 = useSignal(null);
    const node2 = useSignal(null);
    const svg = useSignal(null);
    const container = useSignal(null);


    const inputSize = 5,
        hiddenSize = 6,
        outputSize = 6;


    useVisibleTask$(async () => {

        svg.value = document.getElementById('line-svg');
        container.value = document.getElementById('container');

        console.log(svg.value, container.value)

        function connectElements(elem1, elem2, svg, container, highlighted) {
            let svgNS = svg.namespaceURI;
            let line = document.createElementNS(svgNS, 'line');

            let pos1 = elem1.getBoundingClientRect();
            let pos2 = elem2.getBoundingClientRect();
            let con = container.getBoundingClientRect();

            line.setAttribute('x1', pos1.left - con.left + pos1.width / 2);
            line.setAttribute('y1', pos1.top - con.top + pos1.height / 2);
            line.setAttribute('x2', pos2.left - con.left + pos2.width / 2);
            line.setAttribute('y2', pos2.top - con.top + pos2.height / 2);

            line.setAttribute('stroke', 'rgb(33,33,33)');

            line.setAttribute('stroke-width', '1');

            svg.appendChild(line);
        }

        function loopConnectElements() {
            for (let i = 1; i < inputSize + 1; i++) {
                for (let h = 1; h < hiddenSize + 1; h++) {
                    node1.value = document.getElementById('i' + i)
                    node2.value = document.getElementById('h' + h)
                    connectElements(node1.value, node2.value, svg.value, container.value, false);
                }
            }
            for (let h = 1; h < hiddenSize + 1; h++) {
                for (let o = 1; o < outputSize + 1; o++) {
                    node1.value = document.getElementById('h' + h)
                    node2.value = document.getElementById('o' + o)
                    connectElements(node1.value, node2.value, svg.value, container.value, false);
                }
            }
        }

        loopConnectElements();
    }, [hoverVal.value, hoverVal]);

    const onNodeLeave = $(() => {
        hoverVal.value = null;
        function connectElements(elem1, elem2, svg, container, highlighted) {

            let svgNS = svg.namespaceURI;
            let line = document.createElementNS(svgNS, 'line');

            let pos1 = elem1.getBoundingClientRect();
            let pos2 = elem2.getBoundingClientRect();
            let con = container.getBoundingClientRect();

            line.setAttribute('x1', pos1.left - con.left + pos1.width / 2);
            line.setAttribute('y1', pos1.top - con.top + pos1.height / 2);
            line.setAttribute('x2', pos2.left - con.left + pos2.width / 2);
            line.setAttribute('y2', pos2.top - con.top + pos2.height / 2);

            line.setAttribute('stroke', 'rgb(33,33,33)');

            line.setAttribute('stroke-width', '1');

            svg.appendChild(line);
        }

        function loopConnectElements() {
            svg.value.innerHTML = ""
            for (let i = 1; i < inputSize + 1; i++) {
                for (let h = 1; h < hiddenSize + 1; h++) {
                    node1.value = document.getElementById('i' + i)
                    node2.value = document.getElementById('h' + h)
                    connectElements(node1.value, node2.value, svg.value, container.value, false);
                }
            }
            for (let h = 1; h < hiddenSize + 1; h++) {
                for (let o = 1; o < outputSize + 1; o++) {
                    node1.value = document.getElementById('h' + h)
                    node2.value = document.getElementById('o' + o)
                    connectElements(node1.value, node2.value, svg.value, container.value, false);
                }
            }
        }

        loopConnectElements();
    })

    const onNodeHover = $((i) => {
        hoverVal.value = Number(i.target.id.charAt(1));
        function connectElements(elem1, elem2, svg, container, highlighted) {

            let svgNS = svg.namespaceURI;
            let line = document.createElementNS(svgNS, 'line');

            let pos1 = elem1.getBoundingClientRect();
            let pos2 = elem2.getBoundingClientRect();
            let con = container.getBoundingClientRect();

            line.setAttribute('x1', pos1.left - con.left + pos1.width / 2);
            line.setAttribute('y1', pos1.top - con.top + pos1.height / 2);
            line.setAttribute('x2', pos2.left - con.left + pos2.width / 2);
            line.setAttribute('y2', pos2.top - con.top + pos2.height / 2);
            if (highlighted)
                line.setAttribute('stroke', 'white');
            else
                line.setAttribute('stroke', 'rgb(33,33,33)');

            line.setAttribute('stroke-width', '1');

            svg.appendChild(line);
        }

        function loopConnectElements() {
            svg.value.innerHTML = ""
            for (let i = 1; i < inputSize + 1; i++) {
                for (let h = 1; h < hiddenSize + 1; h++) {
                    node1.value = document.getElementById('i' + i)
                    node2.value = document.getElementById('h' + h)
                    connectElements(node1.value, node2.value, svg.value, container.value, i == hoverVal.value);
                }
            }
            for (let h = 1; h < hiddenSize + 1; h++) {
                for (let o = 1; o < outputSize + 1; o++) {
                    node1.value = document.getElementById('h' + h)
                    node2.value = document.getElementById('o' + o)
                    connectElements(node1.value, node2.value, svg.value, container.value, nodeHighlights[hoverVal.value]?.includes(o));
                }
            }
        }

        loopConnectElements();
    });



    return (
        <section class="relative max-w-7xl mx-auto flex mt-12" id="container">
            <div class="absolute left-0 top-0 flex w-full justify-between items-center">
                <h2 class=" text-5xl text-neutral-700 tracking-widest"><span class="text-neutral-200 tracking-normal font-semibold">ai</span> work</h2>
            </div>
            {/* <div class="absolute left-0 top-20 flex w-full justify-between items-center">
                <div class="flex-1 text-left space-y-1">
                    <h4 class="text-neutral-600 tracking-widest">Input</h4>
                    <p class="text-neutral-300 text-lg font-semibold">projects</p>
                </div>
                <div class="flex-1 text-center space-y-1">
                </div>
                <div class="flex-1 text-right space-y-1">
                    <h4 class="text-neutral-600 tracking-widest ">Output</h4>
                    <p class="text-neutral-300 text-lg font-semibold">classifications</p>
                </div>
            </div> */}
            <div class="flex justify-between relative z-20 mt-28 mb-8 w-full">
                <div class="flex flex-col items-center justify-center space-y-6">
                    {inputNodeList.map((node, i) =>
                        <Ainode title={node.title} id={"i" + (i + 1)} link={node.link} onHover={onNodeHover} onLeave={onNodeLeave} key={i} />
                    )}
                </div>
                <div class="flex flex-col items-center justify-center space-y-6">
                    <Ainode id="h1" highlighed={hoverVal.value} />
                    <Ainode id="h2" highlighed={hoverVal.value} />
                    <Ainode id="h3" highlighed={hoverVal.value} />
                    <Ainode id="h4" highlighed={hoverVal.value} />
                    <Ainode id="h5" highlighed={hoverVal.value} />
                    <Ainode id="h6" highlighed={hoverVal.value} />
                </div>

                <div class="flex flex-col items-center justify-center space-y-6">
                    <Ainode title="llm's" id="o4" highlighed={nodeHighlights[hoverVal.value]?.includes(4)} colorRed={48} colorGreen={162} colorBlue={121} />
                    <Ainode title="optimization" id="o5" highlighed={nodeHighlights[hoverVal.value]?.includes(5)} colorRed={188} colorGreen={172} colorBlue={57} />
                    <Ainode title="visualization" id="o3" highlighed={nodeHighlights[hoverVal.value]?.includes(3)} colorRed={41} colorGreen={178} colorBlue={175} />
                    <Ainode title="research" id="o2" highlighed={nodeHighlights[hoverVal.value]?.includes(2)} colorRed={211} colorGreen={94} colorBlue={94} />
                    <Ainode title="evals" id="o6" highlighed={nodeHighlights[hoverVal.value]?.includes(6)} colorRed={196} colorGreen={117} colorBlue={38} />
                    <Ainode title="university" id="o1" highlighed={nodeHighlights[hoverVal.value]?.includes(1)} colorRed={136} colorGreen={183} colorBlue={105} />
                </div>
            </div>
            <svg id="line-svg" class="absolute top-0 left-0 w-full h-full">

            </svg>
        </section>
    );
});
