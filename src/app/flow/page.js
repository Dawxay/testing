"use client"
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { Black_And_White_Picture } from 'next/font/google';
import { ReactFlow, Background, MarkerType, useEdgesState, addEdge } from "reactflow";
import { useState } from 'react';
import { Handle, Position } from "reactflow";
import 'reactflow/dist/style.css';

const themeColors = {
  light: {
    green: "#55ff00",
    red: "#ff6b6b",
  },
  dark: {
    green: "#55ff00",
    red: "#e74c3c",
  }
}
    const bNodes = [
  {
    "id": "0",
    "position": { "x": 0, "y": 0 },
    "data": {
      "info": "Stanley baseline: average 16-year-old, no strong direction yet.",
      "importanceScore": 0.90,
      "choiceScore": 0.50,
      "confidence": 0.95,
      "start": true,
    }
  },

  {
    "id": "1",
    "position": { "x": 460, "y": -250 },
    "data": {
      "info": "Day 1: does schoolwork seriously and plans the week.",
      "importanceScore": 0.78,
      "choiceScore": 0.88,
      "confidence": 0.92
    }
  },
  {
    "id": "2",
    "position": { "x": 300, "y": -250 },
    "data": {
      "info": "Day 1: practices a creative skill for 2 hours.",
      "importanceScore": 0.67,
      "choiceScore": 0.80,
      "confidence": 0.87
    }
  },
  {
    "id": "3",
    "position": { "x": 180, "y": -250 },
    "data": {
      "info": "Day 1: looks for part-time work or paid side work.",
      "importanceScore": 0.64,
      "choiceScore": 0.74,
      "confidence": 0.90
    }
  },
  {
    "id": "4",
    "position": { "x": 80, "y": -250 },
    "data": {
      "info": "Day 1: works out and talks to friends instead of isolating.",
      "importanceScore": 0.60,
      "choiceScore": 0.69,
      "confidence": 0.89
    }
  },
  {
    "id": "5",
    "position": { "x": -100, "y": -250 },
    "data": {
      "info": "Day 1: drifts into gaming and scrolling all evening.",
      "importanceScore": 0.46,
      "choiceScore": 0.39,
      "confidence": 0.94
    }
  },
  {
    "id": "6",
    "position": { "x": -260, "y": -250 },
    "data": {
      "info": "Day 1: chases fun only, stays up late, ignores responsibilities.",
      "importanceScore": 0.58,
      "choiceScore": 0.24,
      "confidence": 0.92
    }
  },
  {
    "id": "7",
    "position": { "x": -420, "y": -250 },
    "data": {
      "info": "Day 1: follows a shady friend toward easy money.",
      "importanceScore": 0.82,
      "choiceScore": 0.08,
      "confidence": 0.86
    }
  },

  {
    "id": "8",
    "position": { "x": 500, "y": -500 },
    "data": {
      "info": "Day 2: repeats disciplined work and finishes overdue tasks.",
      "importanceScore": 0.80,
      "choiceScore": 0.90,
      "confidence": 0.93
    }
  },
  {
    "id": "9",
    "position": { "x": 340, "y": -500 },
    "data": {
      "info": "Day 2: creates, edits, and posts something publicly.",
      "importanceScore": 0.70,
      "choiceScore": 0.82,
      "confidence": 0.88
    }
  },
  {
    "id": "10",
    "position": { "x": 200, "y": -500 },
    "data": {
      "info": "Day 2: applies for jobs and learns a practical money skill.",
      "importanceScore": 0.66,
      "choiceScore": 0.76,
      "confidence": 0.90
    }
  },
  {
    "id": "11",
    "position": { "x": 90, "y": -500 },
    "data": {
      "info": "Day 2: invests in health, hygiene, and social confidence.",
      "importanceScore": 0.61,
      "choiceScore": 0.71,
      "confidence": 0.90
    }
  },
  {
    "id": "12",
    "position": { "x": -100, "y": -500 },
    "data": {
      "info": "Day 2: does the minimum and lets the day disappear.",
      "importanceScore": 0.44,
      "choiceScore": 0.42,
      "confidence": 0.95
    }
  },
  {
    "id": "13",
    "position": { "x": -290, "y": -500 },
    "data": {
      "info": "Day 2: skips obligations for stimulation and approval.",
      "importanceScore": 0.56,
      "choiceScore": 0.22,
      "confidence": 0.92
    }
  },
  {
    "id": "14",
    "position": { "x": -460, "y": -500 },
    "data": {
      "info": "Day 2: lies, hustles, or steals to get quick reward.",
      "importanceScore": 0.86,
      "choiceScore": 0.06,
      "confidence": 0.88
    }
  },

  {
    "id": "15",
    "position": { "x": 530, "y": -750 },
    "data": {
      "info": "Day 3: chooses long-term progress over comfort again.",
      "importanceScore": 0.83,
      "choiceScore": 0.91,
      "confidence": 0.93
    }
  },
  {
    "id": "16",
    "position": { "x": 360, "y": -750 },
    "data": {
      "info": "Day 3: builds creator portfolio instead of just consuming media.",
      "importanceScore": 0.72,
      "choiceScore": 0.83,
      "confidence": 0.89
    }
  },
  {
    "id": "17",
    "position": { "x": 220, "y": -750 },
    "data": {
      "info": "Day 3: works a shift or takes a useful paid task.",
      "importanceScore": 0.68,
      "choiceScore": 0.77,
      "confidence": 0.91
    }
  },
  {
    "id": "18",
    "position": { "x": 100, "y": -750 },
    "data": {
      "info": "Day 3: spends time with decent friends and stays active.",
      "importanceScore": 0.63,
      "choiceScore": 0.72,
      "confidence": 0.91
    }
  },
  {
    "id": "19",
    "position": { "x": -110, "y": -750 },
    "data": {
      "info": "Day 3: procrastinates and tells himself he will start tomorrow.",
      "importanceScore": 0.48,
      "choiceScore": 0.43,
      "confidence": 0.95
    }
  },
  {
    "id": "20",
    "position": { "x": -310, "y": -750 },
    "data": {
      "info": "Day 3: chases impulse pleasure and loses sleep again.",
      "importanceScore": 0.60,
      "choiceScore": 0.20,
      "confidence": 0.93
    }
  },
  {
    "id": "21",
    "position": { "x": -490, "y": -750 },
    "data": {
      "info": "Day 3: escalates risky behavior for cash, thrills, or status.",
      "importanceScore": 0.88,
      "choiceScore": 0.05,
      "confidence": 0.88
    }
  },

  {
    "id": "22",
    "position": { "x": 550, "y": -1000 },
    "data": {
      "info": "Day 4: keeps structure, finishes work before entertainment.",
      "importanceScore": 0.84,
      "choiceScore": 0.91,
      "confidence": 0.94
    }
  },
  {
    "id": "23",
    "position": { "x": 380, "y": -1000 },
    "data": {
      "info": "Day 4: studies audience, improves creative output, posts again.",
      "importanceScore": 0.73,
      "choiceScore": 0.84,
      "confidence": 0.88
    }
  },
  {
    "id": "24",
    "position": { "x": 230, "y": -1000 },
    "data": {
      "info": "Day 4: saves money and builds practical independence.",
      "importanceScore": 0.70,
      "choiceScore": 0.78,
      "confidence": 0.91
    }
  },
  {
    "id": "25",
    "position": { "x": 110, "y": -1000 },
    "data": {
      "info": "Day 4: keeps up fitness and sends honest messages to people.",
      "importanceScore": 0.62,
      "choiceScore": 0.70,
      "confidence": 0.90
    }
  },
  {
    "id": "26",
    "position": { "x": -120, "y": -1000 },
    "data": {
      "info": "Day 4: stays comfortable, avoids challenge, nothing collapses yet.",
      "importanceScore": 0.41,
      "choiceScore": 0.41,
      "confidence": 0.95
    }
  },
  {
    "id": "27",
    "position": { "x": -330, "y": -1000 },
    "data": {
      "info": "Day 4: skips important work for fun and social validation.",
      "importanceScore": 0.61,
      "choiceScore": 0.19,
      "confidence": 0.93
    }
  },
  {
    "id": "28",
    "position": { "x": -510, "y": -1000 },
    "data": {
      "info": "Day 4: normalizes dishonest or criminal behavior.",
      "importanceScore": 0.89,
      "choiceScore": 0.04,
      "confidence": 0.89
    }
  },

  {
    "id": "29",
    "position": { "x": 570, "y": -1250 },
    "data": {
      "info": "Day 5: compounds progress; routines start feeling normal.",
      "importanceScore": 0.86,
      "choiceScore": 0.92,
      "confidence": 0.94
    }
  },
  {
    "id": "30",
    "position": { "x": 390, "y": -1250 },
    "data": {
      "info": "Day 5: creates consistently even with low external reward.",
      "importanceScore": 0.74,
      "choiceScore": 0.84,
      "confidence": 0.89
    }
  },
  {
    "id": "31",
    "position": { "x": 240, "y": -1250 },
    "data": {
      "info": "Day 5: works, saves, and learns to delay gratification.",
      "importanceScore": 0.71,
      "choiceScore": 0.79,
      "confidence": 0.91
    }
  },
  {
    "id": "32",
    "position": { "x": 120, "y": -1250 },
    "data": {
      "info": "Day 5: becomes more attractive through health and reliability.",
      "importanceScore": 0.63,
      "choiceScore": 0.72,
      "confidence": 0.90
    }
  },
  {
    "id": "33",
    "position": { "x": -130, "y": -1250 },
    "data": {
      "info": "Day 5: floats through the day and protects comfort above growth.",
      "importanceScore": 0.43,
      "choiceScore": 0.38,
      "confidence": 0.95
    }
  },
  {
    "id": "34",
    "position": { "x": -340, "y": -1250 },
    "data": {
      "info": "Day 5: pleasure becomes habitual and self-control weakens.",
      "importanceScore": 0.66,
      "choiceScore": 0.17,
      "confidence": 0.92
    }
  },
  {
    "id": "35",
    "position": { "x": -520, "y": -1250 },
    "data": {
      "info": "Day 5: commits to destructive peers over normal structure.",
      "importanceScore": 0.90,
      "choiceScore": 0.04,
      "confidence": 0.89
    }
  },

  {
    "id": "36",
    "position": { "x": 585, "y": -1500 },
    "data": {
      "info": "Day 6: handles boredom and keeps discipline anyway.",
      "importanceScore": 0.87,
      "choiceScore": 0.93,
      "confidence": 0.94
    }
  },
  {
    "id": "37",
    "position": { "x": 395, "y": -1500 },
    "data": {
      "info": "Day 6: improves creative quality, not just output volume.",
      "importanceScore": 0.75,
      "choiceScore": 0.85,
      "confidence": 0.89
    }
  },
  {
    "id": "38",
    "position": { "x": 250, "y": -1500 },
    "data": {
      "info": "Day 6: gets more dependable at work or money-making.",
      "importanceScore": 0.72,
      "choiceScore": 0.80,
      "confidence": 0.91
    }
  },
  {
    "id": "39",
    "position": { "x": 130, "y": -1500 },
    "data": {
      "info": "Day 6: invests in friendships and possible romance carefully.",
      "importanceScore": 0.66,
      "choiceScore": 0.74,
      "confidence": 0.89
    }
  },
  {
    "id": "40",
    "position": { "x": -140, "y": -1500 },
    "data": {
      "info": "Day 6: drifts because nothing feels urgent enough to change.",
      "importanceScore": 0.47,
      "choiceScore": 0.36,
      "confidence": 0.95
    }
  },
  {
    "id": "41",
    "position": { "x": -350, "y": -1500 },
    "data": {
      "info": "Day 6: more partying, more avoidance, more excuses.",
      "importanceScore": 0.68,
      "choiceScore": 0.15,
      "confidence": 0.92
    }
  },
  {
    "id": "42",
    "position": { "x": -530, "y": -1500 },
    "data": {
      "info": "Day 6: uses manipulation or crime as a normal tactic.",
      "importanceScore": 0.91,
      "choiceScore": 0.03,
      "confidence": 0.90
    }
  },

  {
    "id": "43",
    "position": { "x": 595, "y": -1750 },
    "data": {
      "info": "Day 7: disciplined identity becomes stronger than mood.",
      "importanceScore": 0.88,
      "choiceScore": 0.94,
      "confidence": 0.94
    }
  },
  {
    "id": "44",
    "position": { "x": 430, "y": -1750 },
    "data": {
      "info": "Day 7: creative path now has visible proof of effort.",
      "importanceScore": 0.76,
      "choiceScore": 0.86,
      "confidence": 0.89
    }
  },
  {
    "id": "45",
    "position": { "x": 310, "y": -1750 },
    "data": {
      "info": "Day 7: money habits start building real independence.",
      "importanceScore": 0.73,
      "choiceScore": 0.81,
      "confidence": 0.91
    }
  },
  {
    "id": "46",
    "position": { "x": 190, "y": -1750 },
    "data": {
      "info": "Day 7: social consistency makes trust and attraction more likely.",
      "importanceScore": 0.67,
      "choiceScore": 0.75,
      "confidence": 0.90
    }
  },
  {
    "id": "47",
    "position": { "x": -150, "y": -1750 },
    "data": {
      "info": "Day 7: another low-friction day; nothing improves much.",
      "importanceScore": 0.45,
      "choiceScore": 0.35,
      "confidence": 0.95
    }
  },
  {
    "id": "48",
    "position": { "x": -360, "y": -1750 },
    "data": {
      "info": "Day 7: unhealthy fun becomes the main structure of life.",
      "importanceScore": 0.70,
      "choiceScore": 0.13,
      "confidence": 0.92
    }
  },
  {
    "id": "49",
    "position": { "x": -535, "y": -1750 },
    "data": {
      "info": "Day 7: deepens destructive identity; consequences approach.",
      "importanceScore": 0.92,
      "choiceScore": 0.02,
      "confidence": 0.90
    }
  },

  {
    "id": "50",
    "position": { "x": 600, "y": -2000 },
    "data": {
      "info": "Day 8: continues disciplined path; long-term doors start opening.",
      "importanceScore": 0.90,
      "choiceScore": 0.95,
      "confidence": 0.95
    }
  },
  {
    "id": "51",
    "position": { "x": 450, "y": -2000 },
    "data": {
      "info": "Day 8: creator path remains alive through consistency and patience.",
      "importanceScore": 0.78,
      "choiceScore": 0.87,
      "confidence": 0.90
    }
  },
  {
    "id": "52",
    "position": { "x": 330, "y": -2000 },
    "data": {
      "info": "Day 8: work and money path becomes realistic and sustainable.",
      "importanceScore": 0.75,
      "choiceScore": 0.82,
      "confidence": 0.92
    }
  },
  {
    "id": "53",
    "position": { "x": 210, "y": -2000 },
    "data": {
      "info": "Day 8: balanced social-health effort improves ordinary life quality.",
      "importanceScore": 0.68,
      "choiceScore": 0.76,
      "confidence": 0.91
    }
  },
  {
    "id": "54",
    "position": { "x": 90, "y": -2000 },
    "data": {
      "info": "Day 8: admits things are slipping and tries to reset.",
      "importanceScore": 0.74,
      "choiceScore": 0.70,
      "confidence": 0.85
    }
  },
  {
    "id": "55",
    "position": { "x": -150, "y": -2000 },
    "data": {
      "info": "Day 8: settles into drifting with no major push either way.",
      "importanceScore": 0.49,
      "choiceScore": 0.33,
      "confidence": 0.95
    }
  },
  {
    "id": "56",
    "position": { "x": -390, "y": -2000 },
    "data": {
      "info": "Day 8: pleasure/avoidance is now costly but still chosen.",
      "importanceScore": 0.73,
      "choiceScore": 0.12,
      "confidence": 0.93
    }
  },
  {
    "id": "57",
    "position": { "x": -630, "y": -2000 },
    "data": {
      "info": "Day 8: destructive route becomes the easiest identity to continue.",
      "importanceScore": 0.93,
      "choiceScore": 0.01,
      "confidence": 0.90
    }
  },

  {
    "id": "58",
    "position": { "x": 620, "y": -2250 },
    "data": {
      "info": "Outcome: disciplined, capable adult with strong future options.",
      "importanceScore": 0.96,
      "choiceScore": 0.94,
      "confidence": 0.93
    }
  },
  {
    "id": "59",
    "position": { "x": 470, "y": -2250 },
    "data": {
      "info": "Outcome: creator/portfolio path with real momentum but uncertainty.",
      "importanceScore": 0.83,
      "choiceScore": 0.85,
      "confidence": 0.86
    }
  },
  {
    "id": "60",
    "position": { "x": 340, "y": -2250 },
    "data": {
      "info": "Outcome: financially stable, independent path through work and saving.",
      "importanceScore": 0.88,
      "choiceScore": 0.83,
      "confidence": 0.91
    }
  },
  {
    "id": "61",
    "position": { "x": 210, "y": -2250 },
    "data": {
      "info": "Outcome: healthier, more social, more relationship-ready life.",
      "importanceScore": 0.77,
      "choiceScore": 0.77,
      "confidence": 0.89
    }
  },
  {
    "id": "62",
    "position": { "x": -170, "y": -2250 },
    "data": {
      "info": "Outcome: chronic drift; not ruined, but underbuilt and passive.",
      "importanceScore": 0.72,
      "choiceScore": 0.34,
      "confidence": 0.93
    }
  },
  {
    "id": "63",
    "position": { "x": -420, "y": -2250 },
    "data": {
      "info": "Outcome: avoidance/pleasure loop; unstable, fun-first, low control.",
      "importanceScore": 0.81,
      "choiceScore": 0.14,
      "confidence": 0.91
    }
  },
  {
    "id": "64",
    "position": { "x": -670, "y": -2250 },
    "data": {
      "info": "Outcome: antisocial/criminal spiral with serious external consequences.",
      "importanceScore": 0.95,
      "choiceScore": 0.02,
      "confidence": 0.90
    }
  },
  {
    "id": "65",
    "position": { "x": 90, "y": -2250 },
    "data": {
      "info": "Outcome: early recovery/rebuild path after catching the slide in time.",
      "importanceScore": 0.86,
      "choiceScore": 0.72,
      "confidence": 0.84
    }
  }
]
    const dfEdges = [
    {
      "id": "0-1",
      "source": "0",
      "target": "1",
      "data": {
        "info": "Optimal path toward disciplined capable adult begins with structure.",
        "confidence": 0.93
      }
    },
    {
      "id": "1-8",
      "source": "1",
      "target": "8",
      "data": {
        "info": "Disciplined path: repeats effort on Day 2.",
        "confidence": 0.94
      }
    },
    {
      "id": "8-15",
      "source": "8",
      "target": "15",
      "data": {
        "info": "Disciplined path: chooses long-term growth again.",
        "confidence": 0.94
      }
    },
    {
      "id": "15-22",
      "source": "15",
      "target": "22",
      "data": {
        "info": "Disciplined path: work before comfort becomes habit.",
        "confidence": 0.94
      }
    },
    {
      "id": "22-29",
      "source": "22",
      "target": "29",
      "data": {
        "info": "Disciplined path: compounding begins.",
        "confidence": 0.94
      }
    },
    {
      "id": "29-36",
      "source": "29",
      "target": "36",
      "data": {
        "info": "Disciplined path: continues through boredom.",
        "confidence": 0.93
      }
    },
    {
      "id": "36-43",
      "source": "36",
      "target": "43",
      "data": {
        "info": "Disciplined path: identity stabilizes.",
        "confidence": 0.93
      }
    },
    {
      "id": "43-50",
      "source": "43",
      "target": "50",
      "data": {
        "info": "Disciplined path: strong habits keep opening options.",
        "confidence": 0.94
      }
    },
    {
      "id": "50-58",
      "source": "50",
      "target": "58",
      "data": {
        "info": "Outcome path: disciplined capable adult with broad future upside.",
        "confidence": 0.92
      }
    },

    {
      "id": "0-2",
      "source": "0",
      "target": "2",
      "data": {
        "info": "Optimal creator path begins with actual practice, not fantasy.",
        "confidence": 0.88
      }
    },
    {
      "id": "2-9",
      "source": "2",
      "target": "9",
      "data": {
        "info": "Creator path: makes and publishes early.",
        "confidence": 0.88
      }
    },
    {
      "id": "9-16",
      "source": "9",
      "target": "16",
      "data": {
        "info": "Creator path: builds a portfolio.",
        "confidence": 0.89
      }
    },
    {
      "id": "16-23",
      "source": "16",
      "target": "23",
      "data": {
        "info": "Creator path: improves quality and learns audience.",
        "confidence": 0.88
      }
    },
    {
      "id": "23-30",
      "source": "23",
      "target": "30",
      "data": {
        "info": "Creator path: consistency without praise.",
        "confidence": 0.89
      }
    },
    {
      "id": "30-37",
      "source": "30",
      "target": "37",
      "data": {
        "info": "Creator path: skill focus over empty posting.",
        "confidence": 0.89
      }
    },
    {
      "id": "37-44",
      "source": "37",
      "target": "44",
      "data": {
        "info": "Creator path: effort becomes visible proof.",
        "confidence": 0.88
      }
    },
    {
      "id": "44-51",
      "source": "44",
      "target": "51",
      "data": {
        "info": "Creator path: consistency keeps it alive long enough to matter.",
        "confidence": 0.89
      }
    },
    {
      "id": "51-59",
      "source": "51",
      "target": "59",
      "data": {
        "info": "Outcome path: creator momentum with upside and risk.",
        "confidence": 0.86
      }
    },

    {
      "id": "0-3",
      "source": "0",
      "target": "3",
      "data": {
        "info": "Optimal financial stability path begins with earning intent.",
        "confidence": 0.91
      }
    },
    {
      "id": "3-10",
      "source": "3",
      "target": "10",
      "data": {
        "info": "Money path: practical work plus useful skills.",
        "confidence": 0.91
      }
    },
    {
      "id": "10-17",
      "source": "10",
      "target": "17",
      "data": {
        "info": "Money path: takes real work seriously.",
        "confidence": 0.92
      }
    },
    {
      "id": "17-24",
      "source": "17",
      "target": "24",
      "data": {
        "info": "Money path: saving and independence habits form.",
        "confidence": 0.92
      }
    },
    {
      "id": "24-31",
      "source": "24",
      "target": "31",
      "data": {
        "info": "Money path: delayed gratification becomes normal.",
        "confidence": 0.91
      }
    },
    {
      "id": "31-38",
      "source": "31",
      "target": "38",
      "data": {
        "info": "Money path: reliability raises future stability.",
        "confidence": 0.92
      }
    },
    {
      "id": "38-45",
      "source": "38",
      "target": "45",
      "data": {
        "info": "Money path: compounds through consistency.",
        "confidence": 0.91
      }
    },
    {
      "id": "45-52",
      "source": "45",
      "target": "52",
      "data": {
        "info": "Money path: realistic sustainable independence.",
        "confidence": 0.92
      }
    },
    {
      "id": "52-60",
      "source": "52",
      "target": "60",
      "data": {
        "info": "Outcome path: financially stable, ordinary-success adulthood.",
        "confidence": 0.91
      }
    },

    {
      "id": "0-4",
      "source": "0",
      "target": "4",
      "data": {
        "info": "Optimal health/social path begins with body and people both mattering.",
        "confidence": 0.89
      }
    },
    {
      "id": "4-11",
      "source": "4",
      "target": "11",
      "data": {
        "info": "Health/social path: hygiene, confidence, and contact.",
        "confidence": 0.90
      }
    },
    {
      "id": "11-18",
      "source": "11",
      "target": "18",
      "data": {
        "info": "Health/social path: good peers and movement.",
        "confidence": 0.90
      }
    },
    {
      "id": "18-25",
      "source": "18",
      "target": "25",
      "data": {
        "info": "Health/social path: honest social effort.",
        "confidence": 0.89
      }
    },
    {
      "id": "25-32",
      "source": "25",
      "target": "32",
      "data": {
        "info": "Health/social path: attractiveness rises through habits.",
        "confidence": 0.89
      }
    },
    {
      "id": "32-39",
      "source": "32",
      "target": "39",
      "data": {
        "info": "Health/social path: trust and romance become more likely.",
        "confidence": 0.88
      }
    },
    {
      "id": "39-46",
      "source": "39",
      "target": "46",
      "data": {
        "info": "Health/social path: consistency beats charm alone.",
        "confidence": 0.89
      }
    },
    {
      "id": "46-53",
      "source": "46",
      "target": "53",
      "data": {
        "info": "Health/social path: ordinary life quality improves a lot.",
        "confidence": 0.90
      }
    },
    {
      "id": "53-61",
      "source": "53",
      "target": "61",
      "data": {
        "info": "Outcome path: healthier, more social, more relationship-ready Stanley.",
        "confidence": 0.89
      }
    },

    {
      "id": "0-5",
      "source": "0",
      "target": "5",
      "data": {
        "info": "Optimal drift path begins with low-friction comfort.",
        "confidence": 0.95
      }
    },
    {
      "id": "5-12",
      "source": "5",
      "target": "12",
      "data": {
        "info": "Drift path: minimal effort becomes acceptable.",
        "confidence": 0.95
      }
    },
    {
      "id": "12-19",
      "source": "12",
      "target": "19",
      "data": {
        "info": "Drift path: tomorrow becomes the fantasy start date.",
        "confidence": 0.95
      }
    },
    {
      "id": "19-26",
      "source": "19",
      "target": "26",
      "data": {
        "info": "Drift path: comfort is protected from challenge.",
        "confidence": 0.95
      }
    },
    {
      "id": "26-33",
      "source": "26",
      "target": "33",
      "data": {
        "info": "Drift path: passivity deepens without crisis.",
        "confidence": 0.95
      }
    },
    {
      "id": "33-40",
      "source": "33",
      "target": "40",
      "data": {
        "info": "Drift path: lack of urgency keeps things mediocre.",
        "confidence": 0.95
      }
    },
    {
      "id": "40-47",
      "source": "40",
      "target": "47",
      "data": {
        "info": "Drift path: repeated underinvestment in self.",
        "confidence": 0.95
      }
    },
    {
      "id": "47-55",
      "source": "47",
      "target": "55",
      "data": {
        "info": "Drift path: settles into low-energy ordinary stagnation.",
        "confidence": 0.95
      }
    },
    {
      "id": "55-62",
      "source": "55",
      "target": "62",
      "data": {
        "info": "Outcome path: chronic drift, not catastrophic but deeply limiting.",
        "confidence": 0.93
      }
    },

    {
      "id": "0-6",
      "source": "0",
      "target": "6",
      "data": {
        "info": "Optimal avoidance/pleasure path begins with short-term reward winning.",
        "confidence": 0.92
      }
    },
    {
      "id": "6-13",
      "source": "6",
      "target": "13",
      "data": {
        "info": "Pleasure path: social approval and stimulation outrank duty.",
        "confidence": 0.92
      }
    },
    {
      "id": "13-20",
      "source": "13",
      "target": "20",
      "data": {
        "info": "Pleasure path: sleep, focus, and reliability erode.",
        "confidence": 0.93
      }
    },
    {
      "id": "20-27",
      "source": "20",
      "target": "27",
      "data": {
        "info": "Pleasure path: obligations are repeatedly traded away.",
        "confidence": 0.92
      }
    },
    {
      "id": "27-34",
      "source": "27",
      "target": "34",
      "data": {
        "info": "Pleasure path: weak self-control becomes a pattern.",
        "confidence": 0.92
      }
    },
    {
      "id": "34-41",
      "source": "34",
      "target": "41",
      "data": {
        "info": "Pleasure path: avoidance and excuses gain structure.",
        "confidence": 0.92
      }
    },
    {
      "id": "41-48",
      "source": "41",
      "target": "48",
      "data": {
        "info": "Pleasure path: unhealthy fun starts defining identity.",
        "confidence": 0.92
      }
    },
    {
      "id": "48-56",
      "source": "48",
      "target": "56",
      "data": {
        "info": "Pleasure path: costs are visible but still ignored.",
        "confidence": 0.93
      }
    },
    {
      "id": "56-63",
      "source": "56",
      "target": "63",
      "data": {
        "info": "Outcome path: unstable fun-first life with low control.",
        "confidence": 0.91
      }
    },

    {
      "id": "0-7",
      "source": "0",
      "target": "7",
      "data": {
        "info": "Optimal criminal/antisocial path begins with easy-money temptation.",
        "confidence": 0.88
      }
    },
    {
      "id": "7-14",
      "source": "7",
      "target": "14",
      "data": {
        "info": "Antisocial path: dishonesty pays enough to reinforce itself.",
        "confidence": 0.88
      }
    },
    {
      "id": "14-21",
      "source": "14",
      "target": "21",
      "data": {
        "info": "Antisocial path: thrill, status, and risk intensify.",
        "confidence": 0.88
      }
    },
    {
      "id": "21-28",
      "source": "21",
      "target": "28",
      "data": {
        "info": "Antisocial path: destructive tactics become normal.",
        "confidence": 0.89
      }
    },
    {
      "id": "28-35",
      "source": "28",
      "target": "35",
      "data": {
        "info": "Antisocial path: destructive peers replace healthy structure.",
        "confidence": 0.89
      }
    },
    {
      "id": "35-42",
      "source": "35",
      "target": "42",
      "data": {
        "info": "Antisocial path: manipulation/crime becomes default behavior.",
        "confidence": 0.90
      }
    },
    {
      "id": "42-49",
      "source": "42",
      "target": "49",
      "data": {
        "info": "Antisocial path: consequences approach but identity hardens.",
        "confidence": 0.90
      }
    },
    {
      "id": "49-57",
      "source": "49",
      "target": "57",
      "data": {
        "info": "Antisocial path: destructive route feels easiest to keep choosing.",
        "confidence": 0.90
      }
    },
    {
      "id": "57-64",
      "source": "57",
      "target": "64",
      "data": {
        "info": "Outcome path: criminal/antisocial spiral and serious damage.",
        "confidence": 0.90
      }
    },

    {
      "id": "5-11",
      "source": "5",
      "target": "11",
      "data": {
        "info": "Jump path: Stanley can leave drift early by choosing health/social repair.",
        "confidence": 0.86
      }
    },
    {
      "id": "19-24",
      "source": "19",
      "target": "24",
      "data": {
        "info": "Jump path: procrastination can still pivot into practical stability.",
        "confidence": 0.84
      }
    },
    {
      "id": "27-54",
      "source": "27",
      "target": "54",
      "data": {
        "info": "Recovery setup: after repeated avoidance, Stanley admits the slide and resets.",
        "confidence": 0.83
      }
    },
    {
      "id": "34-54",
      "source": "34",
      "target": "54",
      "data": {
        "info": "Recovery setup: pleasure habits become painful enough to trigger change.",
        "confidence": 0.84
      }
    },
    {
      "id": "41-54",
      "source": "41",
      "target": "54",
      "data": {
        "info": "Recovery setup: fun-first life begins to feel like a trap.",
        "confidence": 0.84
      }
    },
    {
      "id": "54-65",
      "source": "54",
      "target": "65",
      "data": {
        "info": "Outcome path: early recovery/rebuild after catching decline before total collapse.",
        "confidence": 0.84
      }
    }
  ]
function compileNodes(nodes) {
  return nodes.map(node => ({
    ...node,
    type: "circle",
    style: {
      border: "none",
      borderRadius: "50%",
      backgroundColor: "#55ff00"
    }
  }));
}

export default function Flow() {
    // Things that will be decided prgogramatically: color and size and positioning where X is how far the points of time are from each other in terms of how hard it is to switch back to other branch, and y will represent how far the nodes are in terms of time. Also fitview later. Also I was thinking that I do nodes as in more the past then the future since im not sure how to do the future I would have to ahv eway too much data and I have none not even close to too little. Basically the idea Im arriving at is constant recalculation of the future, basically 2 lines, the grayed out one that shows ai all possible path's and where they lead, and then user connecting actual white lines to show what they actually did. then the rest dissapears. also the suggestion line will be gray as fuck, and dashed, and thinnner, real line will be 2 but sugg will be 1. Strokedasharray will be used to style it. 

    //Also all paths wont be shown at all times, instead the user will see a brief overview of all paths, and they would be able to zoom in to see it in more detail. This would make it possible for millions of lines and nodes to exist without React flow dying. 
    function nodeTM({ style }) {
        return (
            <div style={style} className="node w-12 h-12 border-none cursor-default">
                <Handle type="source" position={Position.Top} style={{
                    border: "none",
                    width: "50px",
                    height: "25px",
                    borderRadius: "999px 999px 0 0",
                    cursor: "pointer",
                    opacity: 0,
                    top: "0px"
                }} />
                <Handle type="target" position={Position.Bottom} style={{
                    border: "none",
                    width: "50px",
                    height: "25px",
                    borderRadius: "0 0 999px 999px",
                    cursor: "default",
                    opacity: 0,
                    bottom: "0px"
                }} />
            </div>
        );
    }


    const nodeTypes = {
        circle: nodeTM,
    }

    const [nodes, setNodes] = useState(() => compileNodes(bNodes));
    const [edges, setEdges, onEdgesChange] = useEdgesState(dfEdges);
    const connect = (connection) => {
        setEdges((eds) => addEdge(connection, eds));
    };
    return (
        <aside className='w-[80vw] h-[60vw] border-2 border-[#202020] bg-[#131a1a] m-auto'>
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onEdgesChange={onEdgesChange} onConnect={connect} proOptions={{ hideAttribution: true }} fitView minZoom={0.1}>
                <Background id='sm' variant='dots' gap={100} lineWidth={20} color='#FFFFFF' className='bg-white' />
            </ReactFlow>
        </aside>
    )
}