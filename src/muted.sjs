macro ? {
  rule { $head . $tail . $expr (.) ... } => {
    $head && ($head . $tail) && $head . $tail . $expr (.) ...
  }
  rule { $head . $tail } => {
    $head && ($head . $tail)
  }
  rule { $expr } => { $expr }
}

export ?
