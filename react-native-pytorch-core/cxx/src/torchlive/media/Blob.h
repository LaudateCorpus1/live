/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <cstddef>
#include <cstdint>

namespace torchlive {
namespace media {

struct Blob {
 public:
  Blob(uint8_t* b, size_t bl);

  uint8_t* const getDirectBytes();
  size_t getDirectSize();

 private:
  uint8_t* const buffer;
  size_t byteLength;
};

} // namespace media
} // namespace torchlive
