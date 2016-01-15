macro ? {
  rule { $head . $tail . $expr (.) ... } => {
    $head && (? $head ->> $tail . $expr (.) ...)
  }
  rule { $preface ->> $head . $expr (.) ... } => {
    $preface . $head && ($preface . $head && $preface . $head . $expr (.) ...)
  }
  rule { $head . $tail } => {
    $head && $head . $tail
  }
  rule { $expr } => { $expr }
}

export ?
