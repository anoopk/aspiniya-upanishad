#!/bin/bash

# closure.sh — Submit conceptual closures into the Aspinīya Field

# Closure 1: Quantum Field Theory
curl -s -X POST https://aspiniya.git/api/closure \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Quantum Field Theory",
    "structure": "\u03a6(x) = \u2211_n a_n e^{ipx} + a_n^\u2020 e^{-ipx}"
  }' | jq

echo "---"

# Closure 2: Raga Yaman
curl -s -X POST https://aspiniya.git/api/closure \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Raga Yaman",
    "structure": "N R G M^ D N S"  
  }' | jq

echo "---"

# Closure 3: Einsteinian Relativity
curl -s -X POST https://aspiniya.git/api/closure \
  -H "Content-Type: application/json" \
  -d '{
    "name": "General Relativity",
    "structure": "G_{\u00b5\u03bd} + \u039b g_{\u00b5\u03bd} = 8\u03c0T_{\u00b5\u03bd}"
  }' | jq

echo "---"

# Closure 4: Sanskrit Phonology
curl -s -X POST https://aspiniya.git/api/closure \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sanskrit Phonology",
    "structure": "Gutturals → Palatals → Retroflex → Dentals → Labials"
  }' | jq
