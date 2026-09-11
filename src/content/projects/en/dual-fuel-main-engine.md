---
title: "Dual-Fuel Main Engine Interactive Prototype"
description: "An open-source browser prototype for exploring operating states, instrumentation and commissioning logic of a MAN B&W dual-fuel main-engine concept."
date: 2026-09-10
tags: ["Dual Fuel", "Marine Engines", "HTML", "JavaScript", "Simulation"]
featured: true
status: "Open Source Prototype"
repo: "https://github.com/mberkantastan/DualFuel-Main-Engine"
image: "/images/projects/dual-fuel-engine.svg"
---

## Overview

This project is an interactive browser-based engineering prototype built to organize and visualize dual-fuel main-engine operating information.

The current public repository includes a single-page interface with operating-mode information, telemetry indicators and system-oriented visual sections. It is intended as an experimental platform rather than a certified engine model.

## Why I built it

The project helps me test how complex technical information can be presented as an interactive engineering interface before deeper simulation and hardware-in-the-loop work is added.

## Next steps

- Separate the system model from the presentation layer.
- Add structured state-machine logic for operating transitions.
- Expand alarm, permissive and interlock handling.
- Connect selected parameters to external data sources or hardware interfaces.
- Add model verification cases and repeatable test scenarios.
